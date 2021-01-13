import React from 'react';
import Label from './Label';

import { text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components | Label',
  decorators: [withKnobs],
};
export const DefaultExample = () => (
  <>
    <Label text={text('Label', 'HTML/CSS')}>HTML/CSS</Label>
  </>
);
