import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginPage from '../../containers/LoginPage/LoginPage.component';

function signOut() {
  window.location.href = '/';
}

export default function Header({ isAuthenticated = false }) {
  if (isAuthenticated) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button type="button" onClick={signOut}>
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  return <LoginPage />;
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
