import React from 'react';
import './AppHeader.style.css';
import HyfLogo from './HyfLogo.svg';

export const AppHeader = () => {
  return (
    <header>
      <div className="AppHeader-div">
        <img src={HyfLogo} alt="AppHeader" />
      </div>
    </header>
  );
};
