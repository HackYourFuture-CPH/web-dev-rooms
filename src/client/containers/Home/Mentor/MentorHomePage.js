import React from 'react';
import { Layout, Heading, Loader } from '../../../components';
import Footer from '../../../components/footer/footer';
import { useQuery } from '../../../hooks/useQuery';

export function MentorHomePage() {
  const { data: profile, loading } = useQuery(`/api/profile/mentor`);
  // const { fetch } = useAuthenticatedFetch();

  if (loading) {
    return <Loader />;
  }
  return (
    <Layout>
      <Heading>Mentor Details</Heading>
      <h1>{profile.name}</h1>
      <h3>{profile.organizationName}</h3>
      <h3>{profile.timeZone}</h3>
      {profile.skills.map((skill) => (
        <h4>{skill}</h4>
      ))}
      <Footer />
    </Layout>
  );
}
