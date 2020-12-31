import './SelectionPage.styles.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import HyfBigLogo from '../../components/HyfBigLogo/HyfBigLogo';
import { Layout } from '../../components/Layout';
import Radio from '../../components/Radio/ButtonRadio';

const SelectionPage = () => {
  const [role, setRole] = useState('');
  const [title, setTitle] = useState('web dev rooms');
  const history = useHistory();

  const submit = () => {
    history.push(`/registration/${role}`);
  };

  const roleChanged = (value) => {
    if (role === 'student') {
      setTitle('web dev rooms');
    } else {
      setTitle('STUDY GROUP MANAGEMENT SYSTEM');
    }
    setRole(value);
  };

  return (
    <Layout className="selection-page">
      <HyfBigLogo title={title} />

      <Radio onClick={roleChanged} />

      <Button onClick={submit} disabled={!role}>
        Submit
      </Button>

      <div className="text">
        <p>
          Select if you are a student or a mentor.
          <br />
          Please note if you are an alumni you can not register
          <br />
          as a student
        </p>
      </div>
    </Layout>
  );
};

export default SelectionPage;
