import React from 'react';
import { StaticRouter } from 'react-router-dom';

import SelectOption from './SelectionPage.component';

export default {
  title: 'Pages | Selection page',
  component: SelectOption,
};

export const SelectionPage = () => (
  <>
    <StaticRouter>
      <SelectOption />
    </StaticRouter>
  </>
);
