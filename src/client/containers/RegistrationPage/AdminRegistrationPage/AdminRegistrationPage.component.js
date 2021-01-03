import './AdminRegistrationPage.styles.css';

import React, { useState } from 'react';

import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { AdminAvatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button/Button';
import Heading from '../../../components/Heading/Heading';
import HelpText from '../../../components/HelpText/HelpText';
import Input from '../../../components/Input/Input';
import { Layout } from '../../../components/Layout';

export const AdminRegistrationPage = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  function register() {
    return 'not implemented';
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
        <Button>Submit</Button>
      </form>

      <HelpText>
        If you already do not have a slack id then please make one as it is
        mandatory to have a slack id to connect with mentors and other students.
      </HelpText>
    </Layout>
  );
};
