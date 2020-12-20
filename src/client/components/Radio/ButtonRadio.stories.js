import React from 'react';
import ButtonRadio from './ButtonRadio';
import './ButtonRadio.css';
import { action } from '@storybook/addon-actions';

export default { title: 'RadioButton', component: ButtonRadio };

export const RadioButton = () => <ButtonRadio onClick={action('clicked')} />;
