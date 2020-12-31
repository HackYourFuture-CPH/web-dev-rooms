import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Dropdown from '../Dropdown/DropDown';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import Modal from '../Modal/Modal';
import './ModelViewRegisteringForAnEvent.css';

// TODO: Array topics would be updated through the DB
const topics = [
  {
    id: '01',
    value: 'Add topic here',
  },
  {
    id: '02',
    value: 'topic2',
  },
  {
    id: '03',
    value: 'topic3',
  },
];

const ModelViewRegisteringForAnEvent = (props) => {
  const { onSubmit } = props;

  const [topic, setTopic] = useState('');
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const submit = () => {
    onSubmit(topic, inputValue);
  };

  const canContinue = !!topics && inputValue;
  return (
    <div className="model">
      <Modal title="Register your spot">
        <div className="input dropDown">
          <Dropdown items={topics} value={topic} setValue={setTopic} require />
        </div>
        <div className="input link">
          <Input value={inputValue} onChange={onChange} require />
        </div>
        <div className="text-note">
          <Card
            title="Please note:"
            text="Text inside the component Be prepared. Have some specific questions ready, so we use the time efficiently.Join #elastic-studyroom and #zendesk-studyroom and post your questions in those channels before hand.Do not contact the Volunteers from Elastic or Zendesk outside the shared channel (e.g. by private messaging) Be proactive about coordinating your own participation.Be mindful and respectful towards the time of the Volunteers If you change you mind about the day/time that you registered, you are responsible to inform your Class and do your best for someone else join instead."
          />
        </div>

        <Button onSubmit={submit} disabled={!canContinue}>
          Submit
        </Button>
      </Modal>
    </div>
  );
};

ModelViewRegisteringForAnEvent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ModelViewRegisteringForAnEvent;
