import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { HyfLogo } from '../../components/HyfBigLogo/HyfBigLogo.stories';
import { Layout } from '../../components/Layout';
import { useUser } from '../../context/userContext';

export default function LoginTest() {
  const { login } = useUser();
  const history = useHistory();

  function fakeLogin(type) {
    login({
      accessToken: type,
      userRole: type,
    });
    history.push('/');
  }

  return (
    <Layout>
      <HyfLogo />

      <hr />

      <Button onClick={() => fakeLogin('student')}>Login as student</Button>

      <Button onClick={() => fakeLogin('mentor')}>Login as mentor</Button>

      <Button onClick={() => fakeLogin('admin')}>Login as admin</Button>
    </Layout>
  );
}
