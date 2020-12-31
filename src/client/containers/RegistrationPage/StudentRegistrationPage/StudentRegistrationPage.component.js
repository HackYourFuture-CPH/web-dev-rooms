import React, { useEffect, useState } from 'react';

import { Avatar } from '../../../components/Avatar/Avatar';
import student from '../../../assets/images/student.png';
import Input from '../../../components/Input/Input';
import DropDown from '../../../components/Dropdown/DropDown';
import { Button } from '../../../components/Button/Button';
import logo from '../../../assets/images/hyf-logo.png';
import Loader from '../../../components/Loader/Loader';
import './StudentRegistrationPage.styles.css';
import HelpText from '../../../components/HelpText/HelpText';

const axios = require('axios');

// TODO: Array values would be updated through the DB

export const StudentRegistrationPage = () => {
  const [name, setName] = useState('');
  const [hyfclass, sethyfClass] = useState('Class14');
  const [groups, setGroups] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/groups').then((response) => {
      setGroups(response.data);
      setIsLoading(false);
      sethyfClass(response.data[0].id);
    });
  }, []);
  if (isLoading) {
    return <Loader />;
  }
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
        <DropDown value={hyfclass} setValue={sethyfClass} items={groups} />
      </div>
      <div className="student-registration-button">
        <Button>Submit</Button>
      </div>
      <HelpText />
    </div>
  );
};
