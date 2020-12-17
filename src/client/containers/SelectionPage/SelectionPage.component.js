import React, { useState } from 'react';
import './Selectionpage.css';
import Radio from '../../components/Radio/ButtonRadio';
import HyfBigLogo from '../../components/HyfBigLogo/HyfBigLogo';
import { Button } from '../../components/Button/Button';

const SelectionPage = () => {
  const submit = () => {
    return 'submit';
  };
  const [title, setTitle] = useState('web dev rooms');
  const onclicked = (choice) => {
    if (choice === 'student') {
      setTitle('web dev rooms');
    } else {
      setTitle('STUDY GROUP MANAGEMENT SYSTEM');
    }
  };
  return (
    <div className="selection-page">
      <div className="logo">
        <HyfBigLogo />
      </div>
      <div className="selection-content">{title}</div>

      <div className="radio">
        <Radio onClick={onclicked} />
      </div>
      <div className="sub-button">
        <Button onClick={submit}>Submit</Button>
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

export default SelectionPage;
