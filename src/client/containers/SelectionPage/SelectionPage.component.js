import React, { useState } from 'react';
import './Selectionpage.css';
import Radio from '../../components/Radio/ButtonRadio';
import HyfBigLogo from '../../components/HyfBigLogo/HyfBigLogo';
import { Button } from '../../components/Button/Button';

const SelectOption = () => {
  const [Title, setTitle] = useState('web dev rooms');
  const onclicked = (e) => {
    const choice = e.target.name;
    if (choice === 'student') {
      setTitle('web dev rooms');
    } else if (choice === 'mentor') {
      setTitle('STUDY GROUP MANAGEMENT SYSTEM');
    } else if (choice === 'admin') {
      setTitle('STUDY GROUP MANAGEMENT SYSTEM');
    }
  };
  return (
    <div className="selection-page">
      <div className="logo">
        <HyfBigLogo />
      </div>
      <div className="selection-content">{Title}</div>

      <div className="radio">
        <Radio onClick={onclicked} />
      </div>
      <div className="sub-button">
        <Button>Submit</Button>
      </div>
      <div className="text">
        <p>
          Select if you are a student or a mentor.
          <br />
          Please note if you are an alumni you can not register
          <br />
          as a student
        </p>
      </div>
    </div>
  );
};

export default SelectOption;
