import PropTypes from 'prop-types';
import React from 'react';

import DropDown from '../Dropdown/DropDown';

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

export const TimeZoneDropDown = (props) => {
  return (
    <DropDown
      items={timeZones}
      value={props.timezone}
      setValue={props.setTimezone}
      placeholder="Select a timezone..."
    />
  );
};

TimeZoneDropDown.propTypes = {
  timezone: PropTypes.string,
  setTimezone: PropTypes.func,
};

TimeZoneDropDown.defaultProps = {
  timezone: '',
  setTimezone: null,
};
