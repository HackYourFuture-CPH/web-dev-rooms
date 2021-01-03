import React from 'react';
import Modal from './Modal';

export default { title: 'Components | Modal' };

export const FeedbackModal = () => (
  <Modal title="Feedback Form" isOpen>
    <p>description of modal</p>
  </Modal>
);
