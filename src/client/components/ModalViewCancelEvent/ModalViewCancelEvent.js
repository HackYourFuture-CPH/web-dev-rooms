import React from 'react';
import Modal from '../Modal/Modal';
import { Button } from '../Button/Button';

export const ModalCancelEvent = () => {
  const handleOnClick = () => {
    return null;
  };
  return (
    <div>
      <Modal title="Cancel Event">
        <p>Are you sure you want to cancel</p>
        <Button className="modal-cancel-event-button" onClick={handleOnClick}>
          Cancel
        </Button>
      </Modal>
    </div>
  );
};
