import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './ModalWithCancelRegistration.css';
import Modal from '../Modal/Modal';

function ModalWithCancelRegistration(props) {
  return (
    <div className="cancel-reg-modal">
      <Modal title="Cancel Registration">
        <div className="cancel-reg-textfield">{props.text}</div>
        <div className="cancel-reg-submit-btn">
          <Button appearance={props.appearance} onClick={props.onClick}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}
ModalWithCancelRegistration.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  appearance: PropTypes.string,
};
ModalWithCancelRegistration.defaultProps = {
  text: '',
  onClick: null,
  appearance: 'default',
};

export default ModalWithCancelRegistration;
