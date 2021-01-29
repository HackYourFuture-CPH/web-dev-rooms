import './MentorRegistrationPage.styles.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { MentorAvatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button/Button';
import DropDown from '../../../components/Dropdown/DropDown';
import Heading from '../../../components/Heading/Heading';
import HelpText from '../../../components/HelpText/HelpText';
import Input from '../../../components/Input/Input';
import { Layout } from '../../../components/Layout';
import Loader from '../../../components/Loader/Loader';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';
import { formatApiError } from '../../../utils/formatApiError';

export const MentorRegistrationPage = () => {
  const [name, setName] = useState('');
  const [organizationId, setOrganizationId] = useState();
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [companies, setCompanies] = useState([]);

  const history = useHistory();
  const { fetch, working: isRegistering } = useAuthenticatedFetch();

  useEffect(() => {
    axios.get('/api/organizations').then((res) => {
      const organizations = res.data.map((organization) => {
        return {
          id: organization.id,
          name: organization.name,
        };
      });
      setCompanies(organizations);
      setOrganizationId(res.data.id);
      setLoadingCompanies(false);
    });
  }, []);

  async function register(e) {
    e.preventDefault();
    try {
      await fetch(`/api/user/register/mentor`, {
        method: 'post',
        data: {
          name,
          organizationId,
        },
      });

      toast('You have been registered!');

      history.push('/registration/success');
    } catch (error) {
      toast(
        `Ouch, an error! Please try again. Details: ${formatApiError(error)}`,
      );
    }
  }
  if (loadingCompanies || isRegistering) {
    return <Loader />;
  }

  const canSubmit = !!name && organizationId;

  return (
    <Layout className="mentor-registration-main">
      <section className="w-full">
        <AppHeader />

        <div className="mentor-registration-avatar">
          <MentorAvatar />
        </div>
      </section>

      <Heading>Mentor Registration</Heading>

      <form onSubmit={register} className="registration-form">
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name..."
        />
        <DropDown
          value={organizationId}
          setValue={setOrganizationId}
          items={companies}
        />
        <Button disabled={!canSubmit}>Submit</Button>
      </form>

      <HelpText>
        If you already do not have a slack id then please make one as it is
        mandatory to have a slack id to connect with mentors and other students.
      </HelpText>
    </Layout>
  );
};
