import React from 'react';
import DropDown from '../Dropdown/DropDown';
import PropTypes, { shape } from 'prop-types';
import 'moment-timezone';

export const TimeZoneDropDown = (props) => {
  return (
    <div>
      <DropDown
        items={props.timeZones}
        value={props.timeZone}
        setValue={props.setTimeZone}
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
  timeZone: PropTypes.string,
  setTimeZone: PropTypes.func,
};

TimeZoneDropDown.defaultProps = {
  timeZones: [],
  timeZone: '',
  setTimeZone: null,
};
