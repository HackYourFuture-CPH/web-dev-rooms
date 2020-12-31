import React from 'react';
import PropTypes from 'prop-types';

import './EventCardText.styles.css';

export const EventCardText = (props) => {
  return (
    <div className="container-event-card-text">
      <div className="event-card-title">{props.title}</div>
      <div className="event-card-date-time">{props.datetime}</div>
      <br />
      <div className="event-card-mentor">Mentor: {props.mentor}</div>
      <div className="event-card-link">
        Link: <a href={props.link}>{props.link}</a>
      </div>
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
