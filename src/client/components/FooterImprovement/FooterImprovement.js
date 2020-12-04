import React from 'react';
import Home from './Home.png';
import Profile from './Profile.png';
import './FooterImprovement.styles.css';

const FooterImprovement = () => {
  return (
    <footer>
      <div className="footer-bar">
        <div className="home">
          <a href="/">
            <img src={Home} alt="box" />
          </a>
          <br />
          <a href="/">HOME</a>
        </div>
        <div className="profile">
          <a href="/">
            <img src={Profile} alt="home icon" />
          </a>
          <br />

          <a href="/">PROFILE</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterImprovement;
