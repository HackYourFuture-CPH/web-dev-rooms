import React from 'react';
import './EditEventsModal.css';
import Modal from '../Modal/Modal';
import { EventCardText } from '../EventCardText/EventCardText';
import { Button } from '../Button/Button';
import DateTimePicker from '../DateTime/DateTime';
import DropDown from '../Dropdown/DropDown';
import { StudyGroupLogo } from '../StudyGroupLogo/StudyGroupLogo';
import PropTypes from 'prop-types';

export default function EditEventsModal(props) {
  return (
    <div className="edit-event-modal">
      <Modal>
        <h4 className="modal-title">{props.heading} </h4>
        <div className="edit-event-container">
          <div className="event-card container">
            <div className="event-card-logo-and-text">
              <StudyGroupLogo path={props.path} />
              <EventCardText
                title={props.title}
                datetime={props.datetime}
                mentor={props.mentor}
                link={props.link}
              />
            </div>
          </div>
          <div className="edit-event-dropDown">
            {' '}
            <DropDown
              value={props.value}
              setValue={props.setValue}
              items={props.items}
            />
          </div>
          <div className="edit-event-DateTimePicker">
            <DateTimePicker />
          </div>
          <div className="edit-event-Button">
            <Button onClick={props.onSubmit}>Submit</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
EditEventsModal.propTypes = {
  heading: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  datetime: PropTypes.string,
  mentor: PropTypes.string,
  link: PropTypes.string,
};

EditEventsModal.defaultProps = {
  heading: '',
  path: '',
  title: '',
  datetime: '',
  mentor: '',
  link: '',
};
