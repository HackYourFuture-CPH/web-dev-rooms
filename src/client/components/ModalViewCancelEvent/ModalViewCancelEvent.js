import React from 'react';
import Modal from '../Modal/Modal';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ModalCancelEvent = ({ cancelMessage }) => {
  return (
    <div>
      <Modal title="Cancel Event">
        <p>Are you sure you want to cancel</p>
        <Button
          className="modal-cancel-event-button"
          appearance="danger"
          onClick={cancelMessage}
        >
          Cancel
        </Button>
      </Modal>
    </div>
  );
};
ModalCancelEvent.propTypes = {
  cancelMessage: PropTypes.func,
};

ModalCancelEvent.defaultProps = { cancelMessage: '' };
