import PropTypes, { shape } from 'prop-types';
import React, { useMemo } from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: '100px',
    backgroundColor: '#f6f6f6',
    border: '1px solid #e8e8e8',
    paddingLeft: '0.5rem',
  }),
  menu: (provided) => ({
    ...provided,
  }),
  menuList: (provided) => ({
    ...provided,
    backgroundColor: 'rgb(235, 235, 235)',
  }),
};

export default function DropDown({ placeholder, value, setValue, items }) {
  const options = useMemo(() => {
    return (items || []).map(({ id, name }) => ({
      value: id,
      label: name,
    }));
  }, [items]);

  return (
    <Select
      className="w-full"
      styles={customStyles}
      placeholder={placeholder}
      options={options}
      selected={value}
      onChange={(e) => {
        if (setValue) {
          setValue(e.value);
        }
      }}
    />
  );
}

DropDown.propTypes = {
  placeholder: PropTypes.string,
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
  placeholder: 'Select...',
  value: '',
  setValue: null,
  items: [],
};
