import React, { useEffect, useState } from 'react';

import { Heading } from '../../components';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import { Layout } from '../../components/Layout';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';

export default function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/topics').then((data) => {
      setTopics(data);
    });
  }, [fetch]);

  return (
    <Layout>
      <AppHeader />

      <Heading>Topics</Heading>

      <div className="topic-lable">
        {topics.map((topic) => (
          <span key={topic.id}> {topic.topicName} </span>
        ))}
      </div>
      <Footer id="footer" />
    </Layout>
  );
}
