import React, { useState } from 'react';
import DropDown from '../Dropdown/DropDown';
import 'moment-timezone';

const timeZones = [
  {
    id: 1,
    name: 'Europe/Copenhagen',
  },
  {
    id: 2,
    name: 'Europe/Dublin',
  },
  {
    id: 3,
    name: 'Europe/Budapest',
  },
  {
    id: 4,
    name: 'Australia/Sydney',
  },
];

export const TimeZoneDropDown = () => {
  const [name, setName] = useState('');

  return (
    <>
      <DropDown items={timeZones} value={name} setValue={setName} />
    </>
  );
};
