import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { MentorProfilePage } from './MentorProfile.component';

export default { title: 'MentorProfilePage' };

export const profilePage = () => (
  <StaticRouter>
    <MentorProfilePage />
  </StaticRouter>
);
