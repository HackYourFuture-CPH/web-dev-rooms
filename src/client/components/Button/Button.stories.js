import React from 'react';

import { Button } from './Button';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const DefaultExample = () => (
  <>
    <Button>Register Yourself</Button>
  </>
);
export const DangerExample = () => (
  <>
    <Button appearance="danger">Register Yourself</Button>
  </>
);
export const DisabledExample = () => (
  <>
    <Button disabled={boolean('disabled', false)}>Submit</Button>
  </>
);
