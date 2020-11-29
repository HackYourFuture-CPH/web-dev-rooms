import React from 'react';
import './heading.style.css';

import PropTypes from 'prop-types';

const Header = ({ children }) => <header className="header">{children}</header>;

// Expected prop values
Header.propTypes = {
  children: PropTypes.node,
};

// Default prop values
Header.defaultProps = {
  children: '',
};

export default Header;
