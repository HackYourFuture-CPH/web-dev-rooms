import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Footer from './footer';

export default { title: 'footer' };

export const FooterMenu = () => (
  <>
    <StaticRouter>
      <Footer />
    </StaticRouter>
  </>
);
