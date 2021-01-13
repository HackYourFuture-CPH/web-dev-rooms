import PropTypes from 'prop-types';
import React from 'react';

import { Modal } from '../../../components';

export function ViewEventModal(props) {
  const { onClose } = props;
  return (
    <Modal {...props}>
      <h1>Title</h1>
      <button type="button" onClick={onClose}>
        Close me
      </button>
    </Modal>
  );
}

ViewEventModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
