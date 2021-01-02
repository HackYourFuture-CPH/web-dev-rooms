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

const timeZones = [
  {
    id: 1,
    name: 'Europe/Copenhagen',
  },
  {
    id: 2,
    name: 'Europe/Dublin',
  },
  {
    id: 3,
    name: 'Europe/Budapest',
  },
  {
    id: 4,
    name: 'Australia/Sydney',
  },
];
export const MentorProfilePage = () => {
  const [selectSkill, setSelectSkill] = useState([]);
  const [name, setName] = useState('');

  const apiURL = 'http://localhost:3000/api/skills';

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const skills = data.map((skill) => {
          return {
            id: skill.id,
            value: skill.name,
          };
        });
        console.log(skills);

        setSelectSkill(skills);
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
          <h1>Wecome Dummy Mentor</h1>
        </div>
        <div className="mentor-skills">
          <Label text="HTML/CSS">HTML/CSS</Label>
          <Label text="Javascript">Javascript</Label>
          <Label text="MySQL">MySQL</Label>
          <Label text="NodeJS">NodeJS</Label>
          <Label text="React">React</Label>
        </div>
        <div className="skills-dropdown">
          <DropDown
            items={selectSkill}
            selectSkill={selectSkill}
            setSelectSkill={setSelectSkill}
          />
        </div>
        <div className="timezone-dropdown">
          <TimeZoneDropDown items={timeZones} value={name} setValue={setName} />
        </div>
        <div className="submit-button">
          <Button>Submit</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
