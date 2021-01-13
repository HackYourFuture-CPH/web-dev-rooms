import React from 'react';
import PropTypes from 'prop-types';
import { StudyGroupLogo } from '../StudyGroupLogo/StudyGroupLogo';
import { Button } from '../Button/Button';
import { EventCardText } from '../EventCardText/EventCardText';

import './CancelButtonWithEventsStudyGroups.css';

export const CancelButtonWithEventsStudyGroup = (props) => {
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
      <div className="cancle-button">
        <Button appearance="danger">{props.children}</Button>
      </div>
    </div>
  );
};

CancelButtonWithEventsStudyGroup.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
};

CancelButtonWithEventsStudyGroup.defaultProps = {
  path: '',
  children: null,
  title: '',
  datetime: '',
  mentor: '',
  link: '',
};
