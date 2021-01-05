import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { AdminRegistrationPage } from './AdminRegistrationPage.component';

export default {
  title: 'Pages | AdminRegistrationPage',
};

export const AdminRegistration = () => (
  <StaticRouter>
    <AdminRegistrationPage />
  </StaticRouter>
);
