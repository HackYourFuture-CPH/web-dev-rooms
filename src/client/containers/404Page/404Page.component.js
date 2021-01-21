import './404Page.styles.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { AppHeader, Layout, Footer } from '../../components';

const Error404Page = () => {
  const location = useLocation();

  return (
    <Layout>
      <AppHeader />

      <div className="page404-container">
        <div className="page404-text">
          <div className="text-404">404</div>
          <div>
            Page <code>{location.pathname}</code> Not Found
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Error404Page;
