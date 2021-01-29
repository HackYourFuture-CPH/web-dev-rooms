import './MentorProfile.style.css';

import React, { useState } from 'react';

import mentor from '../../../assets/images/mentor.png';
import { Button, Form, Layout, Loader } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import Footer from '../../../components/footer/footer';
import Heading from '../../../components/Heading/Heading';
import { SkillsPicker } from '../../../components/SkillsPicker/SkillsPicker';
import { TimeZoneDropDown } from '../../../components/TimeZone/TimeZone.component';
import { useUser } from '../../../context/userContext';
import { useQuery } from '../../../hooks/useQuery';

export const MentorProfilePage = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const {
    user: { name },
  } = useUser();

  const { data: skills, loading } = useQuery(`/api/skills`);

  if (loading) {
    return <Loader />;
  }

  return (
    <Layout className="items-center">
      <div className="mentor-headerProfilePage">
        <AppHeader />
        <Avatar avatarUrl={mentor} name="mentor" />
      </div>

      <Heading>Welcome {name}</Heading>

      <Form>
        <SkillsPicker
          skills={skills}
          selected={selectedSkills}
          onChange={setSelectedSkills}
        />
        <TimeZoneDropDown />

        <Button type="submit" className="self-center">
          Submit
        </Button>
      </Form>

      <Footer />
    </Layout>
  );
};
