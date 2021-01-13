import React, { useState, useEffect } from 'react';
import { Layout } from '../../components/Layout';
import Footer from '../../components/footer/footer';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import { AdminAvatar } from '../../components/Avatar';
import Heading from '../../components/Heading/Heading';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';

export default function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/topics').then((data) => {
      setTopics(data);
      console.log(data);
    });
  }, [fetch]);

  return (
    <Layout>
      <AppHeader />
      <div className="admin-registration-avatar">
        <AdminAvatar />
      </div>
      <Heading>Welcome Admin</Heading>
      <div className="topic-lable">
        {topics.map((topic) => (
          <span> {topic.topicName} </span>
        ))}
      </div>
      <Footer id="footer" />
    </Layout>
  );
}
