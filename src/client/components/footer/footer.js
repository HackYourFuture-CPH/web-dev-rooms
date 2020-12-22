import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './footer.styles.css';
import home from './home.png';
import profile from './profile.png';

const Footer = () => {
  const { userRole } = useContext(UserContext);
  const getProfileLink = () => {
    if (userRole === 'student') {
      return '/profile/student';
    }
    if (userRole === 'mentor') {
      return '/profile/mentor';
    }
  };
  return (
    <footer>
      <div className="main-content">
        <Router>
          <div className="box">
            <Link to="/home">
              <img src={home} alt="home icon" />
              <h4>HOME</h4>
            </Link>
          </div>
        </Router>
        <Router>
          <div className=" box">
            <Link to={getProfileLink()}>
              <img src={profile} alt="profile icon" />
              <h4>PROFILE</h4>
            </Link>
          </div>
        </Router>
      </div>
    </footer>
  );
};

export default Footer;
