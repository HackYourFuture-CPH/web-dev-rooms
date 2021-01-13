import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { StudentProfilePage } from './StudentProfile.component';

export default { title: 'StudentProfilePage' };

export const studentprofilePage = () => (
  <>
    <StaticRouter>
      <StudentProfilePage />
    </StaticRouter>
  </>
);
