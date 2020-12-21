import React from 'react';
import ModalCreateEvents from './ModalCreateEvents';

const companies = [
  {
    id: 1,
    value: 'Elastic',
  },
  {
    id: 2,
    value: 'Zendesk',
  },
  {
    id: 3,
    value: 'Hack Your Future',
  },
];

const events = [
  {
    id: 1,
    value: 'Study Group',
  },
  {
    id: 2,
    value: 'Workshop',
  },
  {
    id: 3,
    value: 'Other',
  },
];

export default { title: 'Modal to create events' };

export const Events = () => {
  return (
    <ModalCreateEvents
      events={events}
      companies={companies}
      onSubmit={(data) => {
        return data;
      }}
    />
  );
};
