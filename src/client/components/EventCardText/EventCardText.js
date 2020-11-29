import React from 'react';
import PropTypes from 'prop-types';

import './EventCardText.styles.css';

export const EventCardText = (props) => {
  return (
    <div>
      <div className="event-card-title">{props.title}</div>
      <div className="event-card-date-time">{props.datetime}</div>
      <div className="event-card-mentor">{props.mentor}</div>
      <div className="event-card-link">{props.link}</div>
    </div>
  );
};

EventCardText.propTypes = {
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
};

EventCardText.defaultProps = {
  title: '',
  datetime: '',
  mentor: '',
  link: '',
};
