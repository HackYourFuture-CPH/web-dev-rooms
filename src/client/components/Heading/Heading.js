import './heading.style.css';

import PropTypes from 'prop-types';
import React from 'react';

const Heading = ({ children }) => (
  <header className="header">{children}</header>
);

// Expected prop values
Heading.propTypes = {
  children: PropTypes.node,
};

// Default prop values
Heading.defaultProps = {
  children: '',
};

export default Heading;
