import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './modalAdminCancelStudentRegistration.css';
import Modal from '../Modal/Modal';

export const ModalAdminCancelStudentRegistration = ({ onCancelMessage }) => {
  return (
    <div className="cancel-reg-modal">
      <Modal title="Cancel Student Registration">
        <p className="cancel-reg-textfield">Are you sure you want to cancel</p>
        <div className="cancel-reg-submit-btn">
          <Button appearance="danger" onClick={onCancelMessage}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};
ModalAdminCancelStudentRegistration.propTypes = {
  onCancelMessage: PropTypes.func,
};

ModalAdminCancelStudentRegistration.defaultProps = { onCancelMessage: null };
