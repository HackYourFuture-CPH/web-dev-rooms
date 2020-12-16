import React from 'react';
import { Button } from './DisabledPropButton';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'disabledPropButton',
  decorators: [withKnobs],
};

export const Example = () => {
  return (
    <>
      <Button disabled={boolean('Disabled', false)}>Submit</Button>
    </>
  );
};
