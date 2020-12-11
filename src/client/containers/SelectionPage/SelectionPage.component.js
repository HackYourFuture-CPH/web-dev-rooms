import React, { useState } from 'react';
import './Selectionpage.css';
import PropTypes from 'prop-types';
import Radio from '../../components/Radio/ButtonRadio';
import HyfBigLogo from '../../components/HyfBigLogo/HyfBigLogo';
import { Button } from '../../components/Button/Button';

const SelectOption = (props) => {
  const { onClick } = props;
  const submit = () => {
    onClick();
  };
  const [Title, setTitle] = useState('web dev rooms');
  const onclicked = (e) => {
    const choice = e.target.name;
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
      <div className="selection-content">{Title}</div>

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
SelectOption.propTypes = { onClick: PropTypes.func.isRequired };
export default SelectOption;
