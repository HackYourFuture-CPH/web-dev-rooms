import React from 'react';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import PropTypes from 'prop-types';
import { Avatar } from '../../components/Avatar/Avatar';

export const StudentRegistration = () => {
  return (
    <div>
      <AppHeader />;
      <Avatar inputProps={PropTypes} />
      <p>Student Registration</p>
    </div>
  );
};
