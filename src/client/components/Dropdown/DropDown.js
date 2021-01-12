import React from 'react';
import arrow from './arrow_drop_down_grey_192x192.png';
import './DropDown.css';
import PropTypes, { shape } from 'prop-types';
import { Multiselect } from 'multiselect-react-dropdown';

const selectStyle = {
  multiselectContainer: {
    // To change css for multiselect (Width,height,etc..)
    display: 'block',
    padding: '20px',
    borderRadius: '2rem',
    border: '1px solid #e8e8e8',
    backgroundColor: '#f6f6f6',
    fontFfamily: "'Roboto', sans-serif",
    color: '#bdbdbd',
    margin: '20px auto',
    fontSize: '1.5rem',
    appearance: 'none',
    backgroundImage: `url(${arrow})`,
    backgroundPosition: 'right 10px top 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40px',
  },
  searchBox: {
    // To change search box element look
    border: 'none',
    fontSize: '20px',
  },

  chips: {
    // To change css chips(Selected options)
    background: '#95a5a6',
    color: 'black',
  },

  optionListContainer: {
    backgroundColor: '#e8e8e8',
  },
  optionContainer: {
    background: '#e8e8e8',
    transition: 'all 0.2s',
  },
};

export default function DropDown({ options, placeholder }) {
  return (
    <>
      <Multiselect
        style={selectStyle}
        closeOnSelect={true}
        options={options}
        placeholder={placeholder}
        showCheckbox={true}
        displayValue="name"
        closeIcon="circle"
        showDropDownIcon={true}
      />
    </>
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
};
DropDown.defaultProps = {
  placeholder: '',
  options: [],
};
