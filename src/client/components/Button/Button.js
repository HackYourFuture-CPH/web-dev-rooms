import React from 'react';
import PropTypes from 'prop-types';
import * as cn from 'classnames';

import './Button.styles.css';

export const Button = (props) => {
  const { appearance } = props;

  return (
    <button
      className={cn(
        `button`,
        {
          'button-default': appearance === 'default',
        },
        {
          'button-danger': appearance === 'danger',
        },
        {
          'button-link': appearance === 'link',
        },
      )}
      type="submit"
      onClick={props.onClick}
      appearance={props.appearance}
      disabled={props.disabled}
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
};

Button.defaultProps = {
  children: '',
  onClick: null,
  appearance: 'default',
  disabled: false,
};
