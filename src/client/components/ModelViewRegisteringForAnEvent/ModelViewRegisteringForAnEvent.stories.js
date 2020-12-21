import React from 'react';
import ModelViewRegisteringForAnEvent from './ModelViewRegisteringForAnEvent.js';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Model View Registering For An Event',
  component: ModelViewRegisteringForAnEvent,
  decorators: [withKnobs],
};

export const ViewRegisteringForAnEvent = () => (
  <ModelViewRegisteringForAnEvent />
);
