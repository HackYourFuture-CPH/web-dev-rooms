import React from 'react';
import PropTypes, { shape } from 'prop-types';
import './DropDown.css';

export default function DropDown({ values, setValue, items }) {
  // const [values, setValue] = useState(props.values, props.setValue);

  return (
    <div className="dropdown-component">
      <select
        className="select-css"
        value={values}
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
  values: PropTypes.string,
  setValue: PropTypes.func,
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

DropDown.defaultProps = {
  values: '',
  setValue: null,
  items: [],
};
