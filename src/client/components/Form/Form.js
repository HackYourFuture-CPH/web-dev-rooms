import './Form.styles.css';

import PropTypes from 'prop-types';
import React from 'react';

export function Form({ children }) {
  return <form className="form">{children}</form>;
}

Form.propTypes = {
  children: PropTypes.node,
};

Form.defaultProps = {
  children: null,
};
