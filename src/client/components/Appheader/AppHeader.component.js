import './AppHeader.styles.css';

import React from 'react';
import { useHistory } from 'react-router-dom';

import { useUser } from '../../context/userContext';
import { Button } from '../Button/Button';
import { AppLogo } from './AppLogo';

export const AppHeader = () => {
  const { isAuthenticated } = useUser();
  const history = useHistory();

  function logout() {
    history.push('/logout');
  }

  return (
    <div className="AppHeader">
      <AppLogo className="logo" />

      {isAuthenticated && (
        <div className="logout">
          <Button appearance="link" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};
