import React, { useState } from 'react';
import { TimeZoneDropDown } from './TimeZone.component';

export default { title: 'Components | TimeZone' };

export const TimeDropTime = () => {
  const [name, setName] = useState('');

  return (
    <>
      <TimeZoneDropDown name={name} setName={setName} />
    </>
  );
};
