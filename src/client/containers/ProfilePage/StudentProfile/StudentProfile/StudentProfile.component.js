import './StudentProfile.style.css';
import React, { useEffect, useState } from 'react';

import student from '../../../../assets/images/student.png';
import { Button, Layout } from '../../../../components';
import { AppHeader } from '../../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../../components/Avatar/Avatar';
import Footer from '../../../../components/footer/footer';
import Header from '../../../../components/Heading/Heading';
import Loader from '../../../../components/Loader';
import Input from '../../../../components/Input/Input';
import { useAuthenticatedFetch } from '../../../../hooks/useAuthenticatedFetch';

export const StudentProfilePage = () => {
  const [name, setName] = useState('');
  const { fetch } = useAuthenticatedFetch();
  const { loading } = useState(true);

  useEffect(() => {
    fetch('/api/profile/student').then((data) => {
      setName(data.name);
    });
  }, [fetch]);

  const handleInputNameChange = (e) => {
    setName(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout className="student-profile-page">
      <section className="student-profile-header">
        <AppHeader />
        <Avatar avatarUrl={student} name="student" />
      </section>

      <Header>Welcome {name}</Header>

      <section style={{ maxWidth: '500px', width: '100%' }}>
        <Input value={name} onChange={handleInputNameChange} />

        <Button>Submit</Button>
      </section>

      <Footer />
    </Layout>
  );
};
