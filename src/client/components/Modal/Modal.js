import './Modal.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

export default function Modal(props) {
  const { isOpen, onRequestClose } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      className="react-modal"
      onRequestClose={onRequestClose}
    >
      <div className="modal-wrapper">
        <div className="modal-header">
          <span className="close-modal-btn">
            <FontAwesomeIcon />
          </span>
        </div>
        <h4 className="modal-title">{props.title} </h4>
        {props.children}
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  onRequestClose: null,
};
