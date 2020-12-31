import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DateTime.styles.css';
import PropTypes from 'prop-types';

const inputProps = {
  placeholder: 'Date and Time for Slot',
  closeOnClickOutside: 'true',
  closeOnTab: 'true',
  closeOnSelect: 'true',
  isValidDate: () => 'true',
};

export default function DateTimePicker(props) {
  return (
    <div className="date-time-picker">
      <Datetime
        inputProps={inputProps}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

DateTimePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
};
