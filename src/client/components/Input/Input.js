import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default function Input(props) {
  return (
    <input
      className="input-component"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: null,
};
