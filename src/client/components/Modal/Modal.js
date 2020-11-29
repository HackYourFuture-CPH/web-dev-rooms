import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export default function Modal(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <span className="close-modal-btn">x</span>
      </div>
      <h4 className="modal-title">{props.title} </h4>
      {props.children}
    </div>
  );
}
Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
