import React from 'react';
import DropDown from '../Dropdown/DropDown';
import PropTypes, { shape } from 'prop-types';
import 'moment-timezone';

export const TimeZoneDropDown = (props) => {
  return (
    <div>
      <DropDown
        items={props.timeZones}
        value={props.name}
        setValue={props.setName}
      />
    </div>
  );
};

TimeZoneDropDown.propTypes = {
  timeZones: PropTypes.arrayOf(
    shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  name: PropTypes.string,
  setName: PropTypes.func,
};

TimeZoneDropDown.defaultProps = {
  timeZones: [],
  name: '',
  setName: null,
};
