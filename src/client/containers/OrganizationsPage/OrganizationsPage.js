import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';
import './OrganizationsPage.css';

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState([]);
  const [loadingOrgs, setLoadingOrgs] = useState(true);
  const { fetch } = useAuthenticatedFetch();

  const apiUrl = '/api/organizations';
  useEffect(() => {
    fetch(apiUrl).then((data) => {
      setOrganizations(data);
      setLoadingOrgs(false);
    });
  }, [fetch]);

  if (loadingOrgs) {
    return <Loader />;
  }
  return (
    <Layout>
      <AppHeader />
      <div className="orgs_box">
        <ul className="orgs_list">
          {organizations.map((orgs) => (
            <li className='orgs_list_items' key={orgs.id}>{orgs.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </Layout>
  );
}
