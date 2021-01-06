import './AppHeader.style.css';

import React from 'react';
import { useUser } from '../../context/userContext';
import { Button } from '../Button/Button';

import Vector from './Vector.svg';

export const AppHeader = () => {
  const { isAuthenticated } = useUser();
  return (
    <div className="AppHeader-div">
      <img src={Vector} alt="AppHeader" className="Appheader-img-container" />
      {isAuthenticated && <Button appearance="link">Logout</Button>}
    </div>
  );
};
