import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import Label from '../../components/Label/Tags/Label';

export default function SkillsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get('/api/skills').then((response) => {
      setSkills(response.data);
      setIsLoading(false);
    });
  }, []);

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
