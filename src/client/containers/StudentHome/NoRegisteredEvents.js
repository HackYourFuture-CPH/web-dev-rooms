import React from 'react';

import { Card } from '../../components/Card/Card';

export function NoRegisteredEvents() {
  const cardTitle = 'No events to show here';
  const cardText =
    'There are no events to show here maybe  you did not book any event yet. Please go to events page and book an event';

  return <Card title={cardTitle} text={cardText} />;
}
