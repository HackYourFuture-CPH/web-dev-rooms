import React, { useState, useEffect } from 'react';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import mentor from '../../../assets/images/mentor.png';
import Vector from '../../../components/Appheader/Vector.svg';
import Label from '../../../components/Label/Tags/Label';
import DropDown from '../../../components/Dropdown/DropDown';
import Footer from '../../../components/footer/footer';
import { Button } from '../../../components/Button/Button';
import { TimeZoneDropDown } from '../../../components/TimeZone/TimeZone.component';
import './MentorProfile.style.css';

export const MentorProfilePage = () => {
  const [skill, setSkill] = useState([]);

  const apiURL = '/api/skills';

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const skills = data.map((skillItem) => {
          return {
            id: skillItem.id,
            name: skillItem.name,
          };
        });
        setSkill(skills);
      });
  }, []);

  return (
    <div>
      <div className="mentor-headerProfilePage">
        <AppHeader path={Vector} />
        <Avatar avatarUrl={mentor} name="mentor" />
      </div>

      <section className="mentor-body-container">
        <div className="welcome-mentor">
          <h1>Welcome Dummy Mentor</h1>
        </div>
        <div className="mentor-skills">
          <Label text="HTML/CSS">HTML/CSS</Label>
          <Label text="Javascript">Javascript</Label>
          <Label text="MySQL">MySQL</Label>
          <Label text="NodeJS">NodeJS</Label>
          <Label text="React">React</Label>
        </div>
        <div className="skills-dropdown">
          <DropDown items={skill} value={skill} setValue={setSkill} />
        </div>
        <div className="timezone-dropdown">
          <TimeZoneDropDown />
        </div>
        <div className="submit-button">
          <Button>Submit</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
