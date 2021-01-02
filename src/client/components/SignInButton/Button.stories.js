import React from 'react';
import Button from './Button';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Components | Sign in Button',
  component: Button,
};

export const SignButton = () => <Button onclick={action('clicked')} />;
