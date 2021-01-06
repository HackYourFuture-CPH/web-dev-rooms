import React, { useState, useEffect } from 'react';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import Heading from '../../../components/Heading/Heading';
import mentor from '../../../assets/images/mentor.png';
import Vector from '../../../components/Appheader/Vector.svg';
import Label from '../../../components/Label/Tags/Label';
import DropDown from '../../../components/Dropdown/DropDown';
import Footer from '../../../components/footer/footer';
import { Button } from '../../../components/Button/Button';
import { TimeZoneDropDown } from '../../../components/TimeZone/TimeZone.component';
import { Layout } from '../../../components';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

import './MentorProfile.style.css';

export const MentorProfilePage = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState(0);

  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/skills').then((data) => {
      const skillsData = data.map((skillItem) => {
        return {
          id: skillItem.id,
          name: skillItem.name,
        };
      });
      setSkills(skillsData);
    });
  }, [fetch]);

  return (
    <Layout>
      <div className="mentor-headerProfilePage">
        <AppHeader path={Vector} />
        <Avatar avatarUrl={mentor} name="mentor" />
      </div>

      <section className="mentor-body-container">
        <div className="welcome-mentor">
          <Heading>Welcome Dummy Mentor</Heading>
        </div>
        <div className="mentor-skills">
          <Label text="HTML/CSS">HTML/CSS</Label>
          <Label text="Javascript">Javascript</Label>
          <Label text="MySQL">MySQL</Label>
          <Label text="NodeJS">NodeJS</Label>
          <Label text="React">React</Label>
        </div>
        <div className="skills-dropdown">
          <DropDown items={skills} value={skill} setValue={setSkill} />
        </div>
        <div className="timezone-dropdown">
          <TimeZoneDropDown />
        </div>
        <div className="submit-button">
          <Button>Submit</Button>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};
