import './Form.styles.css';

import PropTypes from 'prop-types';
import React from 'react';

export function Form({ onSubmit, children }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  children: null,
  onSubmit: null,
};
