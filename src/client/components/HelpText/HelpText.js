import React from 'react';
import PropTypes from 'prop-types';
import './HelpText.css';

export default function HelpText(props) {
  return (
    <div className="Helptext-component">
      <p className="HelpText-message">{props.text}</p>
    </div>
  );
}
HelpText.propTypes = {
  text: PropTypes.string,
};

HelpText.defaultProps = {
  text:
    'If you already do not have a slack id then please make one as it is mandatory to have a slack id to connect with mentors and other students.',
};
