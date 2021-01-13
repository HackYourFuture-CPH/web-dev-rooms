import React from 'react';
import './HyfBigLogo.style.css';
import hyfLogo from './hyfLogo.png';

export default function HyfBigLogo() {
  return (
    <div className="hyf-big-logo">
      <div>
        <img className="hyf-logo" src={hyfLogo} alt="logo" />
      </div>
      <p className="app-title">WEB DEV ROOMS</p>
    </div>
  );
}
