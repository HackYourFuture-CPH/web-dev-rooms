import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './DateTime.styles.css';

const inputProps = {
  placeholder: 'Date and Time for Slot',
  closeOnClickOutside: 'true',
  closeOnTab: 'true',
  closeOnSelect: 'true',
  isValidDate: () => 'true',
};

export default function DateTimePicker() {
  return (
    <div className="date-time-picker">
      <Datetime inputProps={inputProps} />
    </div>
  );
}
