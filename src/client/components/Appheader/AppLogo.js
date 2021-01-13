import PropTypes from 'prop-types';
import React from 'react';

import Vector from './Vector.svg';

export function AppLogo({ className }) {
  return <img src={Vector} alt="AppHeader" className={className} />;
}

AppLogo.propTypes = {
  className: PropTypes.string,
};

AppLogo.defaultProps = {
  className: '',
};
