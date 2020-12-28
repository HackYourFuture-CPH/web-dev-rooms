import React from 'react';
import PropTypes from 'prop-types';
import './HelpText.css';

export default function HelpText(props) {
  const klassName = props.klass || '';
  let txt = props.text;

  if (!txt) {
    txt =
      'If you already do not have a slack id then please make' +
      ' ' +
      'one as it is mandatory to have a slack id to connect with' +
      ' ' +
      'mentors and other students.';
  }

  return (
    <div className="helptext-component">
      <p className={`HelpText-message ${klassName}`}>{txt}</p>
    </div>
  );
}
HelpText.propTypes = {
  text: PropTypes.string,
  klass: PropTypes.string,
};
