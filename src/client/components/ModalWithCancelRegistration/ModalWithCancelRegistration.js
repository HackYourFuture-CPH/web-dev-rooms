import './ModalWithCancelRegistration.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Button } from '../Button/Button';
import Modal from '../Modal/Modal';

function ModalWithCancelRegistration(props) {
  const [cancelling, setCancelling] = useState(false);

  async function cancel() {
    setCancelling(true);
    await props.onCancel();
    props.onClose();
  }

  return (
    <div className="cancel-reg-modal">
      <Modal title="Cancel Registration" isOpen>
        <div className="cancel-reg-textfield">
          Are you sure want to cancel your registration?
        </div>
        <div className="cancel-reg-submit-btn">
          <Button appearance="danger" onClick={cancel} disabled={cancelling}>
            Yes, cancel it
          </Button>
        </div>
      </Modal>
    </div>
  );
}

ModalWithCancelRegistration.propTypes = {
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
};

ModalWithCancelRegistration.defaultProps = {
  onCancel: null,
  onClose: null,
};

export default ModalWithCancelRegistration;
