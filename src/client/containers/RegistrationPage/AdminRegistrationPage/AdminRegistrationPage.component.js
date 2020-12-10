import React, { useState } from 'react';

import { Avatar } from '../../../components/Avatar/Avatar';
import admin from '../../../assets/images/admin.png';
import Input from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import logo from '../../../assets/images/hyf-logo.png';
import Footer from '../../../components/footer/footer';
import './AdminRegistrationPage.styles.css';

export const AdminRegistrationPage = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  return (
    <div className="admin-registration-main">
      <div className="admin-registration-avatar">
        <img className="logo-image" src={logo} alt="hyf-logo" />
        <Avatar avatarUrl={admin} name="admin" />
      </div>

      <p className="admin-registration-text">Welcome Admin</p>
      <div className="admin-registration-name">
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
      </div>
      <div className="admin-registration-role">
        <Input
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          placeholder="Role"
        />
      </div>
      <div className="admin-registration-button">
        <Button>Submit</Button>
      </div>
      <p className="admin-registration-info-text">
        If you already do not have a slack id then please make one as it is
        mandatory to have a slack id to connect with mentors and other students.
      </p>
      <div className="admin-registration-footer">
        <Footer />
      </div>
    </div>
  );
};
