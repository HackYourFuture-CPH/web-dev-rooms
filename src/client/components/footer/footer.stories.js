import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Footer from './footer';

export default { title: 'Components | Footer' };

export const FooterMenu = () => (
  <>
    <StaticRouter>
      <Footer />
    </StaticRouter>
  </>
);
