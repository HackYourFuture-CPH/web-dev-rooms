/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as cn from 'classnames';

import './Button.styles.css';

export const Button = (props) => {
  const { appearance } = props;

  const [isOpen, setIsOpen] = useState(false);

  function click(e) {
    if (!props.modal) {
      props.onClick(e);
    }

    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className={cn(
          props.className,
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
        type={props.type || 'submit'}
        onClick={click}
        appearance={props.appearance}
        disabled={props.disabled}
      >
        {props.children}
      </button>

      {props.modal && isOpen
        ? props.modal({
            isOpen,
            onClose: closeModal,
            onRequestClose: closeModal,
          })
        : null}
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  appearance: PropTypes.string,
  disabled: PropTypes.bool,
  modal: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

Button.defaultProps = {
  className: '',
  children: '',
  onClick: null,
  appearance: 'default',
  disabled: false,
  modal: null,
  type: 'submit',
};
