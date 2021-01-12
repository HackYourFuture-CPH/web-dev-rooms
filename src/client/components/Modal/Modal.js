import './Modal.css';

import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

export default function Modal(props) {
  const { isOpen } = props;

  return (
    <ReactModal isOpen={isOpen} className="react-modal">
      <div className="modal-wrapper">
        <div className="modal-header">
          <span className="close-modal-btn">x</span>
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
  isOpen: PropTypes.bool.isRequired,
};
