import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Error404Page from './404Page.component';

export default { title: 'Pages | Error404Page' };

export const Error404PageMenu = () => (
  <StaticRouter>
    <Error404Page />
  </StaticRouter>
);
