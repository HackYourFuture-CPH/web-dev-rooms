import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { AppHeader } from './AppHeader.component';

export default {
  title: 'Components | AppHeader',
  decorators: [withKnobs],
};

export const appHeader = () => (
  <StaticRouter>
    <AppHeader />
  </StaticRouter>
);
