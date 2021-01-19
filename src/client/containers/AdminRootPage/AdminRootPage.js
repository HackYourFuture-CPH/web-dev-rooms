import React from 'react';
import { Link } from 'react-router-dom';

import { AppHeader, Footer, Heading, Layout } from '../../components';

export function AdminRootPage() {
  return (
    <Layout>
      <AppHeader />

      <Heading>Edit information</Heading>

      <Link to="/admin/skills">Edit skills</Link>
      <Link to="/admin/organizations">Edit organizations</Link>
      <Link to="/admin/topics">Edit topics</Link>

      <Footer />
    </Layout>
  );
}
