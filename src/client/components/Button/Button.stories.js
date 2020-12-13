import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
};

export const DefaultExample = () => (
  <>
    <Button>Register Yourself</Button>
  </>
);
export const DangerExample = () => (
  <>
    <Button apperance="danger">Register Yourself</Button>
  </>
);
