import './Modal.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

export default function Modal(props) {
  const { isOpen, onRequestClose, shouldCloseOnOverlayClick } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      className="react-modal"
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <div className="modal-wrapper">
        <div className="modal-header">
          <button
            type="button"
            onClick={onRequestClose}
            className="button-close"
          >
            <span className="close-modal-btn">✕</span>
          </button>
        </div>

        {props.title ? <h4 className="modal-title">{props.title}</h4> : null}

        <section className="modal-content">{props.children}</section>
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  isOpen: false,
  onRequestClose: null,
  shouldCloseOnOverlayClick: true,
};
