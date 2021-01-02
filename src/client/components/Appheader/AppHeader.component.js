import './AppHeader.style.css';

import React from 'react';

import Vector from './Vector.svg';

export const AppHeader = () => {
  return (
    <div className="AppHeader-div">
      <div className="Appheader-img-container">
        <img src={Vector} alt="AppHeader" />
      </div>
    </div>
  );
};
