import React from 'react';
import PropTypes from 'prop-types';
import { StudyGroupLogo } from '../StudyGroupLogo/StudyGroupLogo';
import { ButtonRegisterYourSelf } from '../ButtonRegisterYourSelf/ButtonRegisterYourSelf';
import { EventCardText } from '../EventCardText/EventCardText';

import './CardWithEventsOrStudyGroups.styles.css';

export const CardWithEventsOrStudyGroups = (props) => {
  return (
    <div className="event-card">
      <div className="event-card-logo-and-text event-card-button">
        <StudyGroupLogo path={props.path} />
        <EventCardText
          title={props.title}
          datetime={props.datetime}
          mentor={props.mentor}
          link={props.link}
        />
        <ButtonRegisterYourSelf text={props.text} />
      </div>
    </div>
  );
};

CardWithEventsOrStudyGroups.propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
};

CardWithEventsOrStudyGroups.defaultProps = {
  path: '',
  text: '',
  title: '',
  datetime: '',
  mentor: '',
  link: '',
};
