import './ModalViewCancelEvent.css';

import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '../Button/Button';
import Modal from '../Modal/Modal';

export const ModalCancelEvent = (props) => {
  const { onCancel } = props;

  return (
    <Modal title="Cancel Event" {...props}>
      <section className="modal-view-cancel-event">
        <p>Are you sure you want to cancel this event?</p>
        <Button
          className="modal-cancel-event-button"
          appearance="danger"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </section>
    </Modal>
  );
};

ModalCancelEvent.propTypes = {
  onCancel: PropTypes.func,
};

ModalCancelEvent.defaultProps = {
  onCancel: null,
};
