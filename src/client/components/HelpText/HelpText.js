import './HelpText.css';

import PropTypes from 'prop-types';
import React from 'react';

export default function HelpText(props) {
  return <div className="Helptext-component">{props.children}</div>;
}

HelpText.propTypes = {
  children: PropTypes.node,
};

HelpText.defaultProps = {
  children: null,
};
