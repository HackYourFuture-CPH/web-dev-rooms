import React, { useEffect, useState, useRef } from 'react';

import admin from '../../../assets/images/admin.png';
import { Layout } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { Avatar } from '../../../components/Avatar/Avatar';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/Heading/Heading';
import Input from '../../../components/Input/Input';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';

export const AdminProfilePage = () => {
  const [adminName, setAdminName] = useState(null);
  const [adminRole, setAdminRole] = useState(null);
  const [editableName, setEditableName] = useState(adminName);
  const [editableRole, setEditableRole] = useState(adminRole);
  const { fetch } = useAuthenticatedFetch();

  const inputRef = useRef('');
  useEffect(() => {
    fetch('/api/profile/admin').then((data) => {
      setAdminName(data[0].name);
      setAdminRole(data[0].adminRole);
      setEditableName(data[0].name);
      setEditableRole(data[0].adminRole);
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

      <Header>Welcome {name}</Header>

      <section style={{ maxWidth: '500px', width: '100%' }}>
        <Input
          value={editableName}
          ref={inputRef}
          onChange={handleInputNameChange}
        />
        <Input
          value={editableRole}
          ref={inputRef}
          onChange={handleInputRoleChange}
        />
      </section>

      <Footer />
    </Layout>
  );
};
