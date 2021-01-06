import './StudentProfile.style.css';

import React from 'react';

import student from '../../../../assets/images/student.png';
import { Layout } from '../../../../components';
import { AppHeader } from '../../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../../components/Avatar/Avatar';
import Footer from '../../../../components/footer/footer';
import Header from '../../../../components/Heading/Heading';
import Input from '../../../../components/Input/Input';
import { useUser } from '../../../../context/userContext';

export const StudentProfilePage = () => {
  const {
    user: { name },
  } = useUser();

  return (
    <Layout className="student-profile-page">
      <section className="student-profile-header">
        <AppHeader />
        <Avatar avatarUrl={student} name="student" />
      </section>

      <Header>Welcome {name}</Header>

      <section style={{ maxWidth: '500px', width: '100%' }}>
        <Input value={name} />
      </section>

      <Footer />
    </Layout>
  );
};
