import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export default function Modal(props) {
  return (
    <div className="modal-wrapper">
      <button
        type="button"
        className="modal-close-button"
        onClick={props.onClose}
      >
        ✕
      </button>
      {props.title && <h4 className="modal-title">{props.title} </h4>}
      <div className="modal-content">{props.children}</div>
    </div>
  );
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
