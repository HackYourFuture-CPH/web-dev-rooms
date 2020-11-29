import React from 'react';
import './HyfBigLogo.style.css';
import hyfLogo from './hyfLogo.png';
import { PropTypes } from 'prop-types';

export default function HyfBigLogo({ title }) {
  return (
    <div className="hyf-big-logo">
      <div>
        <img className="hyf-logo" src={hyfLogo} alt="logo" />
      </div>
      <h1 className="app-title">{title}</h1>
    </div>
  );
}

HyfBigLogo.propTypes = {
  title: PropTypes.string.isRequired,
};
