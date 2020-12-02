import React from 'react';
import Input from './Input';
import { text, withKnobs } from '@storybook/addon-knobs';

export default { title: 'Input', decorators: [withKnobs] };

export const Inputfield = () => (
  <Input placeholder={text('placeholder', 'Fullname')} />
);
