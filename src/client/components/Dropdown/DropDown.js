import './DropDown.css';

import PropTypes, { shape } from 'prop-types';
import React from 'react';

export default function DropDown({ value, setValue, items }) {
  return (
    <select
      className="select-css"
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {items.map((item) => (
        <option className="dropdown-option" key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
DropDown.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

DropDown.defaultProps = {
  value: '',
  setValue: null,
  items: [],
};
