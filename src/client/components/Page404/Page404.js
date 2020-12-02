import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader.component';
import Footer from '../footer/footer';
import './Page404.styles.css';

const Page404 = () => {
  return (
    <div className="page404-container">
      <AppHeader />
      <div className="page404-text">
        <div className="text-404">404</div>
        <div>Page Not Found</div>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
