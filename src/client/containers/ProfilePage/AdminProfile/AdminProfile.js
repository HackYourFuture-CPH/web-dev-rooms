import React, { useEffect, useState } from 'react';

import admin from '../../../assets/images/admin.png';
import { Layout } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/Heading/Heading';
import Input from '../../../components/Input/Input';
import { useUser } from '../../../context/userContext';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

export const AdminProfilePage = () => {
  const {
    user: { name },
  } = useUser();
  const [adminRole, setAdminRole] = useState(null);
  const { fetch } = useAuthenticatedFetch();
  useEffect(() => {
    fetch('/api/profile/admin').then((data) => {
      setAdminRole(data[0].adminRole);
    });
  }, [fetch]);
  return (
    <Layout className="admin-profile-page">
      <section className="admin-profile-header">
        <AppHeader />
        <Avatar avatarUrl={admin} name="admin" />
      </section>

      <Header>
        Welcome {name} : {adminRole}
      </Header>

      <section style={{ maxWidth: '500px', width: '100%' }}>
        <Input value={name} />
      </section>

      <Footer />
    </Layout>
  );
};
