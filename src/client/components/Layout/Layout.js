import './Layout.styles.css';

import React from 'react';
import PropTypes from 'prop-types';

const cn = require('classnames');

export default function Layout({ className, children }) {
  return <div className={cn('layout', className)}>{children}</div>;
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Layout.defaultProps = {
  className: '',
  children: null,
};
