import './AppHeader.style.css';

import React from 'react';
import { useHistory } from 'react-router-dom';

import { useUser } from '../../context/userContext';
import { Button } from '../Button/Button';
import Vector from './Vector.svg';

export const AppHeader = () => {
  const { isAuthenticated } = useUser();
  const history = useHistory();

  function logout() {
    history.push('/logout');
  }

  return (
    <div className="AppHeader-div">
      <img src={Vector} alt="AppHeader" className="Appheader-img-container" />
      {isAuthenticated && (
        <Button appearance="link" onClick={logout}>
          Logout
        </Button>
      )}
    </div>
  );
};
