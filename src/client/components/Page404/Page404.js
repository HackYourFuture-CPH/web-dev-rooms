import React from 'react';
import AppHeader from '../AppHeader/AppHeader.component';
import Footer from '../footer/footer';
import Route404 from '../Route404';
import './Page404.styles.css';

const Page404 = () => {
  return (
    <div className="page404-container">
      <AppHeader />
      <Route404 />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Page404;
