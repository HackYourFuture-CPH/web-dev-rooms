import React from 'react';

import { ModalCancelEvent } from './ModalViewCancelEvent';

export default {
  title: 'Modal Cancel Event',
};

export const CancelEventModal = () => (
  <>
    <ModalCancelEvent
      heading="Cancel Event"
      buttonText="Cancel"
      text="Are you sure you want to cancel"
    />
  </>
);
