import React from 'react';
import PropTypes from 'prop-types';
import { StudyGroupLogo } from '../StudyGroupLogo/StudyGroupLogo';
import { EventCardText } from '../EventCardText/EventCardText';

import './CardWithEventsOrStudyGroups.styles.css';

export const CardWithEventsOrStudyGroups = (props) => {
  return (
    <div className="event-card">
      <div className="event-card-logo-and-text">
        <StudyGroupLogo path={props.path} />
        <EventCardText
          title={props.title}
          datetime={props.datetime}
          mentor={props.mentor}
          link={props.link}
        />
      </div>
      <div className="event-card-button">{props.children}</div>
    </div>
  );
};

CardWithEventsOrStudyGroups.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
};

CardWithEventsOrStudyGroups.defaultProps = {
  path: '',
  children: null,
  title: '',
  datetime: '',
  mentor: '',
  link: '',
};
