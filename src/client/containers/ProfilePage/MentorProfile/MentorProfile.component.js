import React, { useState } from 'react';
import { Avatar } from '../../../components/Avatar/Avatar';
import mentor from '../../../assets/images/mentor.png';
import Vector from '../../../components/Appheader/Vector.svg';
import Label from '../../../components/Label/Tags/Label';
import DropDown from '../../../components/Dropdown/DropDown';
import Footer from '../../../components/footer/footer';
import { Button } from '../../../components/Button/Button';
import { TimeZoneDropDown } from '../../../components/TimeZone/TimeZone.component';
import './MentorProfile.style.css';

const skills = [
  {
    id: '01',
    value: 'HTML/CSS',
  },
  {
    id: '02',
    value: 'Firebase',
  },
  {
    id: '03',
    value: 'Javascript',
  },
  {
    id: '04',
    value: 'MYSQL',
  },
  {
    id: '05',
    value: 'NodeJS',
  },
  {
    id: '06',
    value: 'React',
  },
  {
    id: '07',
    value: 'Typescript',
  },
];
const timeZones = [
  {
    id: 1,
    value: 'Europe/Copenhagen',
  },
  {
    id: 2,
    value: 'Europe/Dublin',
  },
  {
    id: 3,
    value: 'Europe/Budapest',
  },
  {
    id: '4',
    value: 'Australia/Sydney',
  },
];
export const MentorProfilePage = () => {
  const [value, setValue] = useState('');
  const [timeZone, setTimeZone] = useState('');

  const onClickhandelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mentor-headerProfilePage">
        <img id="Vector" src={Vector} alt="Vector" />
        <div id="Avatar">
          <Avatar avatarUrl={mentor} name="mentor" />
        </div>
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
          <DropDown items={skills} value={value} setValue={setValue} />
        </div>
        <div className="timezone-dropdown">
          <TimeZoneDropDown
            timeZones={timeZones}
            value={timeZone}
            setValue={setTimeZone}
          />
        </div>
        <div className="submit-button">
          <Button onClick={onClickhandelSubmit}>Submit</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
