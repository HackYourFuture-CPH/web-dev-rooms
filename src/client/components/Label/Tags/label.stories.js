import React from 'react';
import Label from './Label';

import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook knobs', module);
stories.addDecorator(withKnobs);

stories.add('with a label', () => (
  <Label text={text('Label', 'HTML/CSS')}>HTML/CSS</Label>
));
