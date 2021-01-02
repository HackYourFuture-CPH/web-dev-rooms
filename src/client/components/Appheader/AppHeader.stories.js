import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import { AppHeader } from './AppHeader.component';

export default {
  title: 'Components | AppHeader',
  decorators: [withKnobs],
};

export const appHeader = () => <AppHeader />;
