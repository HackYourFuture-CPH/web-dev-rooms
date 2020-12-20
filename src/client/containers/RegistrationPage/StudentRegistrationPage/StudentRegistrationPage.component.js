import React, { useState } from 'react';

import { Avatar } from '../../../components/Avatar/Avatar';
import student from '../../../assets/images/student.png';
import Input from '../../../components/Input/Input';
import DropDown from '../../../components/Dropdown/DropDown';
import { Button } from '../../../components/Button/Button';
import logo from '../../../assets/images/hyf-logo.png';
import './StudentRegistrationPage.styles.css';

// TODO: Array values would be updated through the DB
const classes = [
  {
    id: '01',
    value: 'Class14',
  },
  {
    id: '02',
    value: 'Class15',
  },
  {
    id: '03',
    value: 'Class16',
  },
];

export const StudentRegistrationPage = () => {
  const [name, setName] = useState('');
  const [hyfclass, sethyfClass] = useState('Class14');

  return (
    <div className="student-registration-main">
      <div className="student-registration-avatar">
        <img className="logo-image" src={logo} alt="hyf-logo" />

        <Avatar avatarUrl={student} name="student" />
      </div>

      <p className="student-registration-text">Student registration</p>
      <div className="student-registration-input">
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name..."
        />
      </div>
      <div className="student-registration-dropdown">
        <DropDown value={hyfclass} setValue={sethyfClass} items={classes} />
      </div>
      <div className="student-registration-button">
        <Button>Submit</Button>
      </div>
      <p className="student-registration-info-text">
        If you already do not have a slack id then please make one as it is
        mandatory to have a slack id to connect with mentors and other students.
      </p>
    </div>
  );
};
