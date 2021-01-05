import React from 'react';
import DropDown from '../Dropdown/DropDown';
import PropTypes from 'prop-types';

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
    <>
      <DropDown items={timeZones} value={props.name} setValue={props.setName} />
    </>
  );
};

TimeZoneDropDown.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
};

TimeZoneDropDown.defaultProps = {
  name: '',
  setName: null,
};
