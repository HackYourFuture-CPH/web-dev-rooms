import './StudentRegistrationPage.styles.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { StudentAvatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button/Button';
import DropDown from '../../../components/Dropdown/DropDown';
import Heading from '../../../components/Heading/Heading';
import HelpText from '../../../components/HelpText/HelpText';
import Input from '../../../components/Input/Input';
import { Layout } from '../../../components/Layout';
import Loader from '../../../components/Loader';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

export const StudentRegistrationPage = () => {
  const [name, setName] = useState('');
  const [groupId, setGroupId] = useState();
  const [groups, setGroups] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const { fetch, isRegistering } = useAuthenticatedFetch();

  useEffect(() => {
    axios.get('/api/groups').then((response) => {
      setGroups(response.data);
      setIsLoading(false);
      setGroupId(response.data[0].id);
    });
  }, []);

  async function register(e) {
    e.preventDefault();

    try {
      await fetch(`/api/user/register/student`, {
        method: 'post',
        data: {
          name,
          groupId,
        },
      });

      toast('You have been registered!');

      history.push('/registration/success');
    } catch {
      toast(`Ouch, an error! Please try again.`);
    }
  }

  if (isLoading || isRegistering) {
    return <Loader />;
  }

  const canSubmit = !!name && groupId;

  return (
    <Layout className="student-registration-main">
      <section className="w-full">
        <AppHeader />

        <div className="student-registration-avatar">
          <StudentAvatar />
        </div>
      </section>

      <Heading>Student registration</Heading>

      <form onSubmit={register}>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full name..."
        />

        <DropDown value={groupId} setValue={setGroupId} items={groups} />
        <Button disabled={!canSubmit}>Submit</Button>
      </form>

      <HelpText>
        If you already do not have a slack id then please make one as it is
        mandatory to have a slack id to connect with mentors and other students.
      </HelpText>
    </Layout>
  );
};
