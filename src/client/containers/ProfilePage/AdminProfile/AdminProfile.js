import React, { useEffect, useState } from 'react';
import admin from '../../../assets/images/admin.png';
import { Button, Layout } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/Heading/Heading';
import Input from '../../../components/Input/Input';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

export const AdminProfilePage = () => {
  const [name, setName] = useState('');
  const [adminRole, setAdminRole] = useState('');
  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/profile/admin').then((data) => {
      setName(data.name);
      setAdminRole(data.adminRole);
    });
  }, [fetch]);

  const handleInputNameChange = (e) => {
    setName(e.target.value);
  };
  const handleInputRoleChange = (e) => {
    setAdminRole(e.target.value);
  };
  return (
    <Layout className="admin-profile-page">
      <section className="admin-profile-header">
        <AppHeader />
        <Avatar avatarUrl={admin} name="admin" />
      </section>

      <Header>Welcome {name}</Header>

      <form>
        <Input value={name} onChange={handleInputNameChange} />
        <Input value={adminRole} onChange={handleInputRoleChange} />

        <Button>Submit</Button>
      </form>

      <Footer />
    </Layout>
  );
};
