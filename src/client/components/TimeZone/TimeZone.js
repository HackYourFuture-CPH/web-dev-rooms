import React, { useState } from 'react';
import DropDown from '../Dropdown/DropDown';
import moment from 'moment';
import 'moment-timezone';

const june = moment('2014-06-01T12:00:00Z');
const timeZoneArr = [
  {
    id: 1,
    value: june.tz('America/Los_Angeles').format(), // 5am PDT
  },
  {
    id: 2,
    value: june.tz('America/New_York').format(), // 8am EDT
  },
  {
    id: 3,
    value: june.tz('Asia/Tokyo').format(), // 9pm JST
  },
  {
    id: 4,
    value: june.tz('Australia/Sydney').format(), // 10pm EST
  },
];

export default function TimeZoneDropDown() {
  const [timeZone, setTimeZone] = useState('');

  return (
    <div>
      <DropDown items={timeZoneArr} value={timeZone} setValue={setTimeZone} />
    </div>
  );
}
