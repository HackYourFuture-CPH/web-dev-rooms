import React, { useState } from 'react';
import { AppHeader } from '../Appheader/AppHeader.component';
import InputLink from '../Input/Input';
import Dropdown from '../Dropdown/DropDown';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import Footer from '../footer/footer';
import Logo from './HYF.logo.svg';
import Modal from '../Modal/Modal';
import './ModelViewRegisteringForAnEvent.css';
import { text } from '@storybook/addon-knobs';

const questions = [
  {
    id: '01',
    value: 'Add Question here',
  },
  {
    id: '02',
    value: 'question2',
  },
  {
    id: '03',
    value: 'question3',
  },
];

const ModelViewRegisteringForAnEvent = () => {
  const [value, setValue] = useState('');

  const submit = () => {
    return 'submit';
  };

  const canContinue = !!value;
  return (
    <div className="wrapper">
      <div className="header">
        <AppHeader path={Logo} />
      </div>
      <div className="model">
        <Modal title="Register your spot">
          <div className="input dropDown">
            <Dropdown
              items={questions}
              value={value}
              setValue={setValue}
              require
            />
          </div>
          <div className="input link">
            <InputLink />
          </div>
          <div className="text-note">
            <Card
              title={text('Title', 'Please note:')}
              text={text(
                'Text inside the component',
                'Be prepared. Have some specific questions ready, so we use the time efficiently.Join #elastic-studyroom and #zendesk-studyroom and post your questions in those channels before hand.Do not contact the Volunteers from Elastic or Zendesk outside the shared channel (e.g. by private messaging) Be proactive about coordinating your own participation.Be mindful and respectful towards the time of the Volunteers If you change you mind about the day/time that you registered, you are responsible to inform your Class and do your best for someone else join instead.',
              )}
            />
          </div>

          <Button onClick={submit} disabled={!canContinue}>
            Submit
          </Button>
        </Modal>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ModelViewRegisteringForAnEvent;
