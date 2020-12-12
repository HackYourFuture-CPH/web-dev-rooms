import React from 'react';
import PropTypes from 'prop-types';

import './ModalViewCancelEvent.styles.css';

export const ModalCancelEvent = (props) => {
  return (
    <div className="modal-cancel-event-box">
      <div className="modal-cancel-event-close-x">
        <span>x</span>
      </div>
      <div className="modal-cancel-event-main">
        <div className="modal-cancel-event-heading">{props.heading}</div>
        <div className="modal-cancel-event-text">{props.text}</div>
        <button className="modal-cancel-event-button" type="submit">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

ModalCancelEvent.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  buttonText: PropTypes.string,
};

ModalCancelEvent.defaultProps = {
  text: '',
  heading: '',
  buttonText: '',
};
