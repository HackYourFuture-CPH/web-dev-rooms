import React, { useEffect, useState } from 'react';
import admin from '../../../assets/images/admin.png';
import { Layout } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/Heading/Heading';
import Input from '../../../components/Input/Input';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

export const AdminProfilePage = () => {
  const [editableName, setEditableName] = useState('');
  const [editableRole, setEditableRole] = useState('');
  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/profile/admin').then((data) => {
      setEditableName(data.name);
      setEditableRole(data.adminRole);
    });
  }, [fetch]);
  const handleInputNameChange = (e) => {
    setEditableName(e.target.value);
  };
  const handleInputRoleChange = (e) => {
    setEditableRole(e.target.value);
  };
  return (
    <Layout className="admin-profile-page">
      <section className="admin-profile-header">
        <AppHeader />
        <Avatar avatarUrl={admin} name="admin" />
      </section>

      <Header>Welcome {editableName}</Header>

      <section style={{ maxWidth: '500px', width: '100%' }}>
        <Input value={editableName} onChange={handleInputNameChange} />
        <Input value={editableRole} onChange={handleInputRoleChange} />
      </section>

      <Footer />
    </Layout>
  );
};
