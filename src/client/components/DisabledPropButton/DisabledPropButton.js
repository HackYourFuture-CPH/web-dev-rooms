import React from 'react';
import PropTypes from 'prop-types';

import './DisabledPropButton.css';

export const Button = (props) => {
  return (
    <button
      className="disabled-button"
      type="submit"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  onClick: null,
  disabled: false,
};
