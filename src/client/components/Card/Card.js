import React from 'react';
import PropTypes from 'prop-types';
import './Card.styles.css';

export const Card = (props) => {
  const { title, text } = props;
  return (
    <div className="title-text-card">
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
Card.defaultProps = {
  title: '',
  text: '',
};
