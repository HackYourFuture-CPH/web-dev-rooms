import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Card } from './Card';

export default {
  title: 'Title and Text card',
  decorators: [withKnobs],
};

export const Component = () => (
  <>
    <Card
      title={text('Title', 'This is the title of the card ')}
      text={text(
        'Text inside the component',
        'This is an example text:There are no event’s to show here maybe you did not booked any event yet. Please go to the events page and sign up for some event',
      )}
    />
  </>
);
