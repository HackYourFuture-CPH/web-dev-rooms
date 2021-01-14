import './footer.styles.css';

import {
  faCalendarAlt,
  faEdit,
  faHome,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';

import { UserContext } from '../../context/userContext';
import { AppLogo } from '../Appheader/AppLogo';
import { NavItem } from './NavItem';

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
    <nav className="footer">
      <AppLogo className="app-logo" />
      <NavItem to="/home" icon={faHome}>
        Home
      </NavItem>

      {userRole === 'student' && (
        <>
          <NavItem to="/events" icon={faCalendarAlt}>
            Events
          </NavItem>
        </>
      )}
      {userRole === 'admin' && (
        <>
          <NavItem to="/admin" icon={faEdit}>
            Edit
          </NavItem>
        </>
      )}

      <NavItem to={getProfileLink()} icon={faUser}>
        Profile
      </NavItem>
      <NavItem className="logout" to="/logout" icon={faSignOutAlt}>
        Logout
      </NavItem>
    </nav>
  );
};

export default Footer;
