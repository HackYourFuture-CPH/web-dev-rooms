import React from 'react';
import { AppHeader } from '../../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../../components/Avatar/Avatar';
import student from '../../../../assets/images/student.png';
import Vector from '../../../../components/Appheader/Vector.svg';
import Header from '../../../../components/Heading/Heading';
import ElasticLogo from '../../../../components/StudyGroupLogo/Elastic.logo.svg';
import { Button } from '../../../../components/Button/Button';
import { Layout } from '../../../../components';
import Footer from '../../../../components/footer/footer';
import { CardWithEventsOrStudyGroups } from '../../../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';

import './StudentProfile.style.css';

export const StudentProfilePage = () => {
  return (
    <Layout className="student-profile-page">
      <section className="student-profile-header">
        <AppHeader path={Vector} />
        <Avatar avatarUrl={student} name="student" />
      </section>

      <Header>Welcome Demo Student1</Header>

      <CardWithEventsOrStudyGroups
        path={ElasticLogo}
        title="HYF - Week 46"
        datetime="Wednesday | 11 Nov 20|10:00 CEST"
        mentor="Benjamin"
        link="https:// www.hyf.org"
      >
        <Button>Give Feedback</Button>
      </CardWithEventsOrStudyGroups>
      <Footer />
    </Layout>
  );
};
