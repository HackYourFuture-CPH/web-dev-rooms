import React from 'react';
import HyfLogo from './HyfLogo.svg';
import './AppHeader.style.css';

export const AppHeader = () => {
  return (
    <header>
      <div className="AppHeader-div">
        <img src={HyfLogo} alt="AppHeader" />
      </div>
    </header>
  );
};
