import './MentorRegistrationPage.styles.css';

import React, { useEffect, useState } from 'react';

import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { MentorAvatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button/Button';
import DropDown from '../../../components/Dropdown/DropDown';
import Heading from '../../../components/Heading/Heading';
import HelpText from '../../../components/HelpText/HelpText';
import Input from '../../../components/Input/Input';
import { Layout } from '../../../components/Layout';
import Loader from '../../../components/Loader/Loader';

export const MentorRegistrationPage = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [companies, setCompanies] = useState([]);

  const apiURL = '/api/organizations';

  useEffect(() => {
    fetch(apiURL)
      .then((data) => data.json())
      .then((data) => {
        const organizations = data.map((organization) => {
          return {
            id: organization.id,
            name: organization.name,
          };
        });
        setCompanies(organizations);
        setLoadingCompanies(false);
      });
  }, []);

  function register(e) {
    e.preventDefault();
    return 'not implemented';
  }

  if (loadingCompanies) {
    return <Loader />;
  }

  return (
    <Layout className="mentor-registration-main">
      <section className="w-full">
        <AppHeader />

        <div className="mentor-registration-avatar">
          <MentorAvatar />
        </div>
      </section>

      <Heading>Mentor Registration</Heading>

      <form onSubmit={register} className="registration-form">
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Full Name..."
        />
        <DropDown value={company} setValue={setCompany} items={companies} />
        <Button>Submit</Button>
      </form>

      <HelpText>
        If you already do not have a slack id then please make one as it is
        mandatory to have a slack id to connect with mentors and other students.
      </HelpText>
    </Layout>
  );
};
