import React from 'react';
import PropTypes from 'prop-types';

import './Button.styles.css';

export const Button = (props) => {
  return (
    <button
      className={`button ${
        props.apperance === 'danger' ? 'button-danger' : ''
      }`}
      type="submit"
      onClick={props.onClick}
      apperance={props.apperance}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  apperance: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  onClick: null,
  apperance: 'default',
};
