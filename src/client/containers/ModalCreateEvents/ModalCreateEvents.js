import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';

import './ModalCreateEvents.styles.css';
import DropDown from '../../components/Dropdown/DropDown';
import DateTime from '../../components/DateTime/DateTime';
import Modal from '../../components/Modal/Modal';

const companies = [
  {
    id: '01',
    value: 'Elastic',
  },
  {
    id: '02',
    value: 'Zendesk',
  },
  {
    id: '03',
    value: 'Hack Your Future',
  },
];

const eventTypes = [
  {
    id: '01',
    value: 'Study Group',
  },
  {
    id: '02',
    value: 'Workshop',
  },
  {
    id: '03',
    value: 'Other',
  },
];

function ModalCreateEvents() {
  const [companyname, setCompanyName] = useState('');
  const [eventtype, setEventType] = useState('');
  const [datetime, setDateTime] = useState('');

  return (
    <div className="create-event-modal">
      <Modal title="Create Event (Time Slot)">
        <div className="create-event-name">
          <DropDown
            value={companyname}
            setValue={setCompanyName}
            items={companies}
          />
        </div>
        <div className="create-event-type">
          <DropDown
            value={eventtype}
            setValue={setEventType}
            items={eventTypes}
          />
        </div>
        <div className="create-event-datetime">
          <DateTime value={datetime} setValue={setDateTime} />
        </div>
        <div className="create-event-registration-button">
          <Button>Submit</Button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalCreateEvents;
