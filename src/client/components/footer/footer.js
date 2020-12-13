import React from 'react';
import './footer.styles.css';
import home from './home.png';
import profile from './profile.png';

const Footer = () => {
  return (
    <footer>
      <div className="main-content">
        <div className="box">
          <img src={home} alt="home icon" />
          <h4>HOME</h4>
        </div>
        <div className=" box">
          <img src={profile} alt="profile icon" />
          <h4>PROFILE</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
