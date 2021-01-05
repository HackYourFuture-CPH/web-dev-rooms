import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import Label from '../../components/Label/Tags/Label';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';

export default function SkillsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/skills').then((data) => {
      setSkills(data);
      setIsLoading(false);
    });
  }, [fetch]);

  return (
    <Layout>
      <AppHeader />
      {isLoading && <Loader />}
      {skills.map((skill) => (
        <Label text={skill.name} />
      ))}
      <Footer />
    </Layout>
  );
}
