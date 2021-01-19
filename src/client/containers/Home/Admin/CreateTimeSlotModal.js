import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../../components';

export function CreateTimeSlotModal(props) {
  const { onClose } = props;

  return (
    <Modal {...props}>
      <h1>Title</h1>

      <button type="button" onClick={onClose}>
        Close modal
      </button>
    </Modal>
  );
}

CreateTimeSlotModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
