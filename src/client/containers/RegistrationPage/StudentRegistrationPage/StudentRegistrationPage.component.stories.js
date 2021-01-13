import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { StudentRegistrationPage } from './StudentRegistrationPage.component';

export default {
  title: 'Pages | StudentRegistrationPage',
};

export const StudentRegistration = () => (
  <StaticRouter>
    <StudentRegistrationPage />
  </StaticRouter>
);
