import React from 'react';
import SelectOption from './SelectionPage.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Selection page',
  component: SelectOption,
};

export const SelectionPage = () => <SelectOption onClick={action('submit')} />;
