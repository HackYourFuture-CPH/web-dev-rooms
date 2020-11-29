import React from 'react';
import './Selectionpage.css';
import Radio from '../Radio/ButtonRadio';
import HYFLogo from './HYF.logo.svg';

const SelectOption = () => {
  return (
    <div className="selection-page">
      <div className="logo">
        <img src={HYFLogo} alt="hyf logo" />
        <p>STUDY GROUP MANAGEMENT SYSTEM</p>
      </div>

      <div className="radio">
        <Radio />
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
