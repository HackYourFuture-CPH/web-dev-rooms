import React from 'react';
import Modal from '../Modal/Modal';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export const ModalCancelEvent = (props) => {
  return (
    <div>
      <Modal title="Cancel Event">
        <p>Are you sure you want to cancel</p>
        <Button className="modal-cancel-event-button" onClick={props.onClick}>
          Cancel
        </Button>
      </Modal>
    </div>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: null,
};
