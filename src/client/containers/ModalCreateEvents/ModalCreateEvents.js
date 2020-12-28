import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import PropTypes from 'prop-types';
import './ModalCreateEvents.styles.css';
import DropDown from '../../components/Dropdown/DropDown';
import DateTime from '../../components/DateTime/DateTime';
import Modal from '../../components/Modal/Modal';

function ModalCreateEvents(props) {
  const [datetime, setDateTime] = useState('');
  const [event, setEvent] = useState('');
  const [company, setCompany] = useState('');
  const isDisabled = datetime === '' || event === '' || company === '';
  return (
    <div className="create-event-modal">
      <Modal title="Create Event (Time Slot)">
        <div className="create-event-company-name">
          <DropDown
            value={company}
            setValue={setCompany}
            items={[{ id: '', value: 'Company Name' }, ...props.companies]}
          />
        </div>
        <div className="create-event-type">
          <DropDown
            value={event}
            setValue={setEvent}
            items={[{ id: '', value: 'Type of Event' }, ...props.events]}
          />
        </div>
        <div className="create-event-datetime">
          <DateTime value={datetime} onChange={setDateTime} />
        </div>
        <div className="create-event-registration-button">
          <Button
            onClick={() => {
              props.onSubmit({ company, event, datetime });
            }}
            disabled={isDisabled}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}

ModalCreateEvents.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  ).isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default ModalCreateEvents;
