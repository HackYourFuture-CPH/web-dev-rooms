import React from 'react';
import { EventCardText } from '../../components/EventCardText/EventCardText';
import Modal from '../../components/Modal/Modal';
import { StudyGroupLogo } from '../../components/StudyGroupLogo/StudyGroupLogo';
import PropTypes, { shape } from 'prop-types';
import Elasticlogo from './Elastic.logo.svg';
import './Admin-event-modal.style.css';

export default function EventModalView({
  eventTitle,
  eventDate,
  mentor,
  eventLink,
  items,
}) {
  return (
    <div className="event-modal-view">
      <Modal>
        <div className="study-group-info">
          <div className="study-group-logo">
            <StudyGroupLogo path={Elasticlogo} />
          </div>
          <div className="card-text">
            <EventCardText
              title={eventTitle}
              datetime={eventDate}
              mentor={mentor}
              link={eventLink}
            />
          </div>
        </div>
        <div className="student-details-block">
          {items.map((student) => (
            <div className="student-info" key={student.id}>
              {student.studentName} | {student.class}
              <p>
                <span className="close-btn">x</span>
              </p>
              <p>Topic: {student.topic}</p>
              <p>
                code :
                <a href={student.code} className="student-code-link">
                  {student.code}
                </a>
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

EventModalView.propTypes = {
  eventTitle: PropTypes.string,
  eventDate: PropTypes.string,
  mentor: PropTypes.string,
  eventLink: PropTypes.string,
  items: PropTypes.arrayOf(
    shape({
      studentName: PropTypes.string,
      class: PropTypes.string,
      topic: PropTypes.string,
      code: PropTypes.string,
    }),
  ),
};
EventModalView.defaultProps = {
  eventTitle: '',
  eventDate: '',
  mentor: '',
  eventLink: '',
  items: [],
};
