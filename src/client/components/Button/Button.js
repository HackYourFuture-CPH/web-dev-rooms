import React from 'react';
import PropTypes from 'prop-types';

import './Button.styles.css';

export const Button = (props) => {
  return (
    <button
      className={`button ${
        props.appearance === 'danger' ? 'button-danger' : ''
      } ${props.disabled === 'disabled' ? 'disabled-button' : ''} ${
        props.appearance === 'link' ? 'button-link' : ''
      } ${props.cssClass}`}
      type="submit"
      onClick={props.onClick}
      appearance={props.appearance}
      disabled={props.disabled}
      cssClass={props.cssClass}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  appearance: PropTypes.string,
  disabled: PropTypes.bool,

  cssClass: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  onClick: null,
  appearance: 'default',
  disabled: false,

  cssClass: '',
};
