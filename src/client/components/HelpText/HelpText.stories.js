import React from 'react';
import HelpText from './HelpText';
export default { title: 'Help Text' };

export const selectionPageMessage = () => (
  <HelpText
    text="Select if you are a student or a mentor.
Please note if you are an alumni you can not register as a student"
  />
);

export const defaultMessage = () => <HelpText />;
