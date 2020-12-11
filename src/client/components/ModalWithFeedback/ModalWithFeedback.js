import React, { useState } from 'react';
import { Button } from '../Button/Button';
import PropTypes, { func } from 'prop-types';
import './ModalWithFeedback.css';
import Input from '../Input/Input';
import { EventCardText } from '../EventCardText/EventCardText';
import Modal from '../Modal/Modal';

function ModalWithFeedback(props) {
  const [name, setName] = useState('');
  return (
    <div className="feedback-modal">
      <Modal title="Feedback Form">
        <div className="event-small-container">
          <span className="dot" />
          <div className="eventcardtext">
            <EventCardText
              title={props.title}
              datetime={props.datetime}
              mentor={props.mentor}
              link={props.link}
            />
          </div>
        </div>
        <div className="feedback-textfield">
          <Input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="
You just attended the study group with student1,
 student2, student3, student4......."
          />
        </div>
        <div className="feedback-submit-btn">
          <Button onClick={props.onSubmit}>Submit</Button>
        </div>
      </Modal>
    </div>
  );
}
ModalWithFeedback.propTypes = {
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
  onSubmit: func,
};

ModalWithFeedback.defaultProps = {
  title: '',
  datetime: '',
  mentor: '',
  link: '',
  onSubmit: null,
};

export default ModalWithFeedback;
