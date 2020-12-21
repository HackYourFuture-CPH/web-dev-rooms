import React from 'react';
import { TimeZoneDropDown } from './TimeZone.component';

const timeZones = [
  {
    id: 1,
    value: 'Europe/Copenhagen',
  },
  {
    id: 2,
    value: 'Europe/Dublin',
  },
  {
    id: 3,
    value: 'Europe/Budapest',
  },
  {
    id: 4,
    value: 'Australia/Sydney',
  },
];
function TimeDropTime() {
  return (
    <>
      <TimeZoneDropDown timeZones={timeZones} />
    </>
  );
}
export default { title: 'TimeZone' };

export const timeDrop = () => <TimeDropTime />;
