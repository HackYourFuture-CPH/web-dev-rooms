import PropTypes from 'prop-types';
import React from 'react';

import { ModalCancelEvent } from '../../../components/ModalViewCancelEvent/ModalViewCancelEvent';

export function DeleteEventModal(props) {
  const { onClose, onDelete, id } = props;

  async function deleteEvent() {
    await onDelete(id);

    onClose();
  }

  return <ModalCancelEvent onCancel={deleteEvent} {...props} />;
}

DeleteEventModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
