import React from 'react';
import { EventCardText } from '../../components/EventCardText/EventCardText';
import Modal from '../../components/Modal/Modal';
import { StudyGroupLogo } from '../../components/StudyGroupLogo/StudyGroupLogo';
import PropTypes from 'prop-types';
import Elasticlogo from './Elastic.logo.svg';
import './Admin-event-modal.style.css';

export default function EventModalView(props) {
  const students = [
    {
      studentName: 'DemoStudent1',
      class: 'class 15',
      topic: 'Topic: JavaScript week3 homework,classes,Function',
      code: 'maherweb.dk',
    },
    {
      studentName: 'DemoStudent2',
      calss: 'class 15',
      topic: 'Topic: JavaScript week3 homework,classes,Function',
      code: 'maherweb.dk',
    },
    {
      studentName: 'DemoStudent3',
      calss: 'class 15',
      topic: 'Topic: JavaScript week3 homework,classes,Function',
      code: 'maherweb.dk',
    },
  ];
  return (
    <div className="event-modal-view">
      <Modal>
        <div className="study-group-info">
          <div className="study-group-logo">
            <StudyGroupLogo path={Elasticlogo} />
          </div>
          <div className="card-text">
            <EventCardText
              title={props.eventTitle}
              datetime={props.eventDate}
              mentor={props.mentor}
              link={props.eventLink}
            />
          </div>
        </div>
        <div className="student-details-block">
          {students.map((elem) => {
            return (
              <div className="student-info">
                <p>
                  {elem.studentName}|{elem.class}
                  <span className="close-btn">x</span>
                </p>

                <p>Topic: {elem.topic}</p>
                <p>
                  code :
                  <a href={elem.code} className="student-code-link">
                    {elem.code}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
EventModalView.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  mentor: PropTypes.string.isRequired,
  eventLink: PropTypes.string.isRequired,
};
