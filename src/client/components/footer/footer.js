import './footer.styles.css';

import {
  faCalendarAlt,
  faHome,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/userContext';
import { AppLogo } from '../Appheader/AppLogo';

const Footer = () => {
  const { userRole } = useContext(UserContext);

  const getProfileLink = () => {
    if (userRole === 'student') {
      return '/profile/student';
    }
    if (userRole === 'mentor') {
      return '/profile/mentor';
    }
    if (userRole === 'admin') {
      return '/profile/admin';
    }
  };

  return (
    <nav className="footer">
      <AppLogo className="app-logo" />
      <div>
        <Link to="/home">
          <FontAwesomeIcon icon={faHome} />
          <h4>HOME</h4>
        </Link>
      </div>
      {userRole === 'student' && (
        <div>
          <Link to="/events">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <h4>EVENTS</h4>
          </Link>
        </div>
      )}
      <div>
        <Link to={getProfileLink()}>
          <FontAwesomeIcon icon={faUser} />
          <h4>PROFILE</h4>
        </Link>
      </div>

      <div className="logout">
        <Link to="/logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
