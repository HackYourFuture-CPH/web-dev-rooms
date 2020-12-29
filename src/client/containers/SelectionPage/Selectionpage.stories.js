import React from 'react';
import SelectOption from './SelectionPage.component';

export default {
  title: 'Selection page',
  component: SelectOption,
};

export const SelectionPage = () => (
  <SelectOption
    selectionPageText="Select if you are a student or a mentor.
Please note if you are an alumni you can not register as a student"
  />
);
