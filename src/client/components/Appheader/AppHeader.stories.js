import { withKnobs } from '@storybook/addon-knobs';
import Vector from './Vector.svg'; // css and propreties come directly within the svg file
import React from 'react';
import { AppHeader } from './AppHeader.component'; // the component that you are working with

export default {
  // what you see @ bookstory list
  title: 'AppHeader',
  decorators: [withKnobs],
};

export const appHeader = () => <AppHeader path={Vector} />;
