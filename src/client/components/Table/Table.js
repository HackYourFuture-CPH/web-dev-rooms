import './Table.styles.css';

import * as cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export function Table({ className, children }) {
  return <table className={cn('table', className)}>{children}</table>;
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Table.defaultProps = {
  className: '',
  children: null,
};
