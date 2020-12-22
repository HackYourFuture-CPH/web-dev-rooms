import React, { useState } from 'react';
import DropDown from '../Dropdown/DropDown';
import PropTypes, { shape } from 'prop-types';
import 'moment-timezone';

export const TimeZoneDropDown = (props) => {
  const [timeZone, setTimeZone] = useState('');
  return (
    <div>
      <DropDown
        items={props.timeZones}
        value={timeZone}
        setValue={setTimeZone}
      />
    </div>
  );
};

TimeZoneDropDown.propTypes = {
  timeZones: PropTypes.arrayOf(
    shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  ),
};

TimeZoneDropDown.defaultProps = {
  timeZones: [],
};
