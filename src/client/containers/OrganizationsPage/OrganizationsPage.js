import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import Label from '../../components/Label/Tags/Label';

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState([]);
  const [loadingOrgs, setLoadingOrgs] = useState(true);

  const apiUrl = '/api/organizations';
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setOrganizations(data);
        setLoadingOrgs(false);
      });
  }, []);

  if (loadingOrgs) {
    return <Loader />;
  }
  return (
    <Layout>
      <AppHeader />
      {organizations.map((orgs) => (
        <Label key={orgs.id} text={orgs.name} />
      ))}
      <Footer />
    </Layout>
  );
}
