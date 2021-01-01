import React from 'react';
import PropTypes from 'prop-types';
import './HelpText.css';

export default function HelpText(props) {
  return <div className="Helptext-component">{props.children}</div>;
}

HelpText.propTypes = {
  children: PropTypes.string.isRequired,
};
