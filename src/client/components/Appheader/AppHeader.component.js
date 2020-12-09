// dumb/statless img component with props

import React from 'react';
import './AppHeader.style.css';
import Vector from './Vector.svg';

export const AppHeader = () => {
  return (
    <div className="AppHeader-div">
      <img src={Vector} alt="AppHeader" />
    </div>
  );
};
