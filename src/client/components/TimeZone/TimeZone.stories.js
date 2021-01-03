import React, { useState } from 'react';
import { TimeZoneDropDown } from './TimeZone.component';

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
export default { title: 'Components | TimeZone' };

export const TimeDropTime = () => {
  const [name, setName] = useState('');

  return (
    <>
      <TimeZoneDropDown timeZones={timeZones} name={name} setName={setName} />
    </>
  );
};
