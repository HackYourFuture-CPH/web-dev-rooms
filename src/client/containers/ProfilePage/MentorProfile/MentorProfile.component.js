import './MentorProfile.style.css';

import React, { useState, useEffect } from 'react';

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
import Input from '../../../components/Input/Input';

import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

export const MentorProfilePage = () => {
  const [timezone, setTimezone] = useState(undefined);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [mentorName, setMentorName] = useState('');
  const {
    user: { name },
  } = useUser();
  const { fetch } = useAuthenticatedFetch();
  const { data: skills, loading } = useQuery(`/api/skills`);
  useEffect(() => {
    fetch(`/api/profile/mentor`).then((data) => {
      setMentorName(data.name);
    });
  }, [fetch]);

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(JSON.stringify({ timezone, selectedSkills }));
  }

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

      <Form onSubmit={handleSubmit}>
        <Input
          value={mentorName}
          onChange={(e) => setMentorName(e.target.value)}
        />
        <SkillsPicker
          skills={skills}
          selected={selectedSkills}
          onChange={setSelectedSkills}
        />
        <TimeZoneDropDown timezone={timezone} setTimezone={setTimezone} />

        <Button type="submit" className="self-center">
          Submit
        </Button>
      </Form>

      <Footer />
    </Layout>
  );
};
