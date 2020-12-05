import React from 'react';
import PropTypes, { shape } from 'prop-types';
import './DropDown.css';

export default function DropDown({ value, setValue, items }) {
  return (
    <div className="dropdown-component">
      <select
        className="select-css"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      >
        {items.map((item) => (
          <option className="dropdown-option" key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
}
DropDown.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

DropDown.defaultProps = {
  value: '',
  setValue: null,
  items: [],
};
