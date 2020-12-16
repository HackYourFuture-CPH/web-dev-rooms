import React from 'react';
import Modal from '../Modal/Modal';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ModalCancelEvent = ({ onCancelMessage }) => {
  return (
    <Modal title="Cancel Event">
      <p>Are you sure you want to cancel</p>
      <Button
        className="modal-cancel-event-button"
        appearance="danger"
        onClick={onCancelMessage}
      >
        Cancel
      </Button>
    </Modal>
  );
};
ModalCancelEvent.propTypes = {
  onCancelMessage: PropTypes.func,
};

ModalCancelEvent.defaultProps = { onCancelMessage: null };
