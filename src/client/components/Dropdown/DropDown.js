import React from 'react';
import './DropDown.css';
import PropTypes, { shape } from 'prop-types';
import { Multiselect } from 'multiselect-react-dropdown';

export default function DropDown({ options, placeholder, singleSelect }) {
  return (
    <div className="main-wrapper">
      <Multiselect
        closeOnSelect={true}
        options={options}
        placeholder={placeholder}
        showCheckbox={true}
        displayValue="name"
        hidePlaceholder={true}
        singleSelect={singleSelect}

        /* loading = {true} */
      />
    </div>
  );
}

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  placeholder: PropTypes.string,
  singleSelect: PropTypes.bool,
};
DropDown.defaultProps = {
  placeholder: '',
  options: [],
  singleSelect: false,
};
