import React, { useState } from 'react';

import { Avatar } from '../../../components/Avatar/Avatar';
import mentor from '../../../assets/images/mentor.png';
import Input from '../../../components/Input/Input';
import DropDown from '../../../components/Dropdown/DropDown';
import { Button } from '../../../components/Button/Button';
import logo from '../../../assets/images/hyf-logo.png';
import './MentorRegistrationPage.styles.css';

// TODO: Array values would be updated through the DB
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

export const MentorRegistrationPage = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  return (
    <div className="mentor-registration-main">
      <div className="mentor-registration-avatar">
        <img className="logo-image" src={logo} alt="hyf-logo" />
        <Avatar avatarUrl={mentor} name="mentor" />
      </div>

      <p className="mentor-registration-text">Mentor Registration</p>
      <div className="mentor-registration-input">
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name..."
        />
      </div>
      <div className="mentor-registration-dropdown">
        <DropDown value={company} setValue={setCompany} items={companies} />
      </div>
      <div className="mentor-registration-button">
        <Button>Submit</Button>
      </div>

      <p className="mentor-registration-info-text">
        If you already do not have a slack id then please make one as it is
        mandatory to have a slack id to connect with mentors and other students.
      </p>
    </div>
  );
};
