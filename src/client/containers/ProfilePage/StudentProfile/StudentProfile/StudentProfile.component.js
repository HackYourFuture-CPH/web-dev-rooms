import React from 'react';
import { Avatar } from '../../../../components/Avatar/Avatar';
import student from '../../../../assets/images/student.png';
import Vector from '../../../../components/Appheader/Vector.svg';
import { EventCardText } from '../../../../components/EventCardText/EventCardText';
import ElasticLogo from '../../../../components/StudyGroupLogo/Elastic.logo.svg';
import { Button } from '../../../../components/Button/Button';
import Footer from '../../../../components/footer/footer';

import './StudentProfile.style.css';

export const StudentProfilePage = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="student-profile-page">
      <div className="student-headerProfilePage">
        <img id="Vector" src={Vector} alt="Vector" />
        <div id="Avatar">
          <Avatar avatarUrl={student} name="student" />
        </div>
      </div>

      <section className="student-body-container">
        <div className="welcome-student">
          <h1 className="welcome-text">Wecome Demo Student1</h1>
        </div>

        <div className="event-card-container">
          <div className="body-event">
            <div className="event-card">
              <img src={ElasticLogo} alt={ElasticLogo} />
            </div>
            <div className="event-card-text">
              <EventCardText
                title="Elastic - Week 46"
                datetime="Wednesday | 11 Nov 20|10:00 CEST"
                mentor="'mentor name.'"
                link="https://slack.com/meeting...."
              />
            </div>
          </div>
          <div className="feedback-submit-btn">
            <Button onClick={handelSubmit}>Give Feedback</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
