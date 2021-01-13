import './AdminRegistrationPage.styles.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { AdminAvatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button/Button';
import Heading from '../../../components/Heading/Heading';
import HelpText from '../../../components/HelpText/HelpText';
import Input from '../../../components/Input/Input';
import { Layout } from '../../../components/Layout';
import Loader from '../../../components/Loader';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';
import { formatApiError } from '../../../utils/formatApiError';

export const AdminRegistrationPage = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const history = useHistory();

  const { fetch, working: isRegistering } = useAuthenticatedFetch();

  async function register(e) {
    e.preventDefault();

    try {
      await fetch(`/api/user/register/admin`, {
        method: 'post',
        data: {
          name,
          role,
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

  const canSubmit = !!name && !!role;

  if (isRegistering) {
    return <Loader />;
  }

  return (
    <Layout className="admin-registration-main">
      <section className="w-full">
        <AppHeader />

        <div className="admin-registration-avatar">
          <AdminAvatar />
        </div>
      </section>

      <Heading>Welcome Admin</Heading>

      <form className="registration-form" onSubmit={register}>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <Input
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          placeholder="Role"
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
