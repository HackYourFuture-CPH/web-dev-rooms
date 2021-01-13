import React from 'react';
import ModelViewRegisteringForAnEvent from './ModelViewRegisteringForAnEvent.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Modals | RegisteringAnEventModal',
  component: ModelViewRegisteringForAnEvent,
};

export const ViewRegisteringForAnEvent = () => (
  <ModelViewRegisteringForAnEvent onSubmit={action('submit')} />
);
