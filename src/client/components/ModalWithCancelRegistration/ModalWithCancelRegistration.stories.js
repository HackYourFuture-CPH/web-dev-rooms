import React from 'react';

import ModalWithCancelRegistration from './ModalWithCancelRegistration';

export default { title: 'Modal with Cancel Registration' };

export const Modalwithcancelregistration = () => (
  <ModalWithCancelRegistration
    text="Are you sure want to cancel"
    appearance="danger"
  />
);
