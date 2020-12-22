import React from 'react';
import { useHistory } from 'react-router-dom';

import { HyfLogo } from '../../components/HyfBigLogo/HyfBigLogo.stories';
import { Button } from '../../components/Button/Button';
import { useUser } from '../../context/userContext';

export default function LoginTest() {
  const { login } = useUser();
  const history = useHistory();

  function fakeLogin(type) {
    login(type, type);
    history.push('/');
  }

  return (
    <>
      <HyfLogo />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Button onClick={() => fakeLogin('student')}>Login as student</Button>

        <Button onClick={() => fakeLogin('mentor')}>Login as mentor</Button>

        <Button onClick={() => fakeLogin('admin')}>Login as admin</Button>
      </div>
    </>
  );
}
