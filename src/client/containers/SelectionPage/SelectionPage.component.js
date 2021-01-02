import './SelectionPage.styles.css';

import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import HelpText from '../../components/HelpText/HelpText';
import HyfBigLogo from '../../components/HyfBigLogo/HyfBigLogo';
import { Layout } from '../../components/Layout';
import Radio from '../../components/Radio/ButtonRadio';

const SelectionPage = () => {
  const [role, setRole] = useState('');
  const history = useHistory();

  const submit = () => {
    history.push(`/registration/${role}`);
  };

  const roleChanged = (value) => {
    setRole(value);
  };

  return (
    <Layout className="selection-page">
      <HyfBigLogo />

      <Radio onClick={roleChanged} />

      <Button onClick={submit} disabled={!role}>
        Submit
      </Button>

      <HelpText>
        <p>
          Select if you are a student or a mentor.
          <br />
          Please note if you are an alumni you can not register
          <br />
          as a student. <Link to="/logout">Logout</Link>
        </p>
      </HelpText>
    </Layout>
  );
};

export default SelectionPage;
