import '../index.css';

import React from 'react';
import { StaticRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <StaticRouter>
      <Story />
    </StaticRouter>
  ),
];
