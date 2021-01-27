import React from 'react';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';
import PropTypes from 'prop-types';
import { ModalCancelEvent } from '../../../components/ModalViewCancelEvent/ModalViewCancelEvent';

export function DeleteEventModal(props) {
  const { onClose, id } = props;
  const { fetch } = useAuthenticatedFetch();

  async function deleteEvent() {
    await fetch(`/api/events/${id}`, { method: 'DELETE' });

    onClose();
  }

  return <ModalCancelEvent onCancelMessage={deleteEvent} {...props} />;
}

DeleteEventModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
