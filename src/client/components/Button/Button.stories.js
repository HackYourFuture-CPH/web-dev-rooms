import React from 'react';

import { Button } from './Button';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components | Button',
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
    <Button disabled={boolean('disabled', true)}>Submit</Button>
  </>
);
export const LinkExample = () => (
  <>
    <Button appearance="link">Sign Out</Button>
  </>
);
