import React, { useState } from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';
import './ModalWithFeedback.css';
import Input from '../Input/Input';
import { EventCardText } from '../EventCardText/EventCardText';
import Modal from '../Modal/Modal';

function ModalWithFeedback(props) {
  const [text, setText] = useState('');

  const handelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(text);
    setText('');
  };
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
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder={props.placeholder}
          />
        </div>
        <div className="feedback-submit-btn">
          <Button onClick={handelSubmit}>Submit</Button>
        </div>
      </Modal>
    </div>
  );
}
ModalWithFeedback.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
  onSubmit: PropTypes.func,
};

ModalWithFeedback.defaultProps = {
  placeholder: '',
  title: '',
  datetime: '',
  mentor: '',
  link: '',
  onSubmit: null,
};

export default ModalWithFeedback;
