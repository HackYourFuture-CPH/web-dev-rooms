import React, { useEffect, useState } from 'react';

import student from '../../assets/images/student.png';
import { Button, Layout } from '../../../components';
import Header from '../../components/Heading/Heading';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import { Avatar } from '../../components/Avatar/Avatar';
import Footer from '../../components/footer/footer';
import Loader from '../../components/Loader/Loader';
import Input from '../../../components/Input/Input';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';

function StudentEditProfile() {
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
    <Layout className="student-edit-profile-page">
      <section className="profile-header">
        <AppHeader />
        <Avatar avatarUrl={student} name="student" />
      </section>

      <Header>Welcome {name}</Header>

      <form>
        <Input value={name} onChange={handleInputNameChange} />

        <Button>Submit</Button>
      </form>

      <Footer />
    </Layout>
  );
}

export default StudentEditProfile;
