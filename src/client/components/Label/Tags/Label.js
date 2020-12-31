import React from 'react';
import PropTypes from 'prop-types';
import './label.style.css';

const Label = ({ text }) => <label className="label">{text}</label>;

// Expected prop values
Label.propTypes = {
  text: PropTypes.string,
};

// Default prop values
Label.defaultProps = {
  text: '',
};

export default Label;
