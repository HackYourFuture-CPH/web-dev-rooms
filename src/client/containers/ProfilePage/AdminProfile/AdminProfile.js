import React from 'react';

import admin from '../../../assets/images/admin.png';
import { Layout } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/Heading/Heading';
import Input from '../../../components/Input/Input';
import { useUser } from '../../../context/userContext';

export const AdminProfilePage = () => {
  const {
    user: { name },
  } = useUser();
  return (
    <Layout className="admin-profile-page">
      <section className="admin-profile-header">
        <AppHeader />
        <Avatar avatarUrl={admin} name="admin" />
      </section>

      <Header>Welcome {name}</Header>

      <section style={{ maxWidth: '500px', width: '100%' }}>
        <Input value={name} />
      </section>

      <Footer />
    </Layout>
  );
};
