import React from 'react';
import { Button } from '../Button/Button';
import './ModalWithFeedback.css';
import { Card } from '../Card/Card';
// import HYFLogo from './HYF.logo.svg';
import { EventCardText } from '../EventCardText/EventCardText';
// import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

function ModalWithFeedback() {
  return (
    <div className="feedback-modal">
      <Modal title="Feedback Form">
        <div className="event-small-container">
          <span className="dot" />
          <div className="eventcardtext">
            <EventCardText
              title="Elastic - Week 46"
              datetime="Wednesday | 11 Nov 20|10:00 CEST"
              mentor="'Mentor Name'"
              link="https://slack.com/meeting...."
            />
          </div>
        </div>
        <div className="feedback-textfield">
          <Card text="You just attended the study group with student1, student2, student3, student4......." />
        </div>
        <div className="feedback-submit-btn">
          <Button>Submit</Button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWithFeedback;
