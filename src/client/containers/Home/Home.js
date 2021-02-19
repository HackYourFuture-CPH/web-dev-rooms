import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

import { Layout } from '../../components/Layout';
import ModalWithFeedback from '../../components/ModalWithFeedback/ModalWithFeedback';
import { useUser } from '../../context/userContext';
import StudentHome from '../StudentHome/StudentHome';
import { AdminHomePage } from './Admin/AdminHomePage';
import { MentorHomePage } from './Mentor/MentorHomePage';

export const Home = () => {
  const { userRole } = useUser();
  const [showModal, setShowModal] = useState(false);

  function handle() {
    setShowModal(false);
  }

  if (userRole === 'student') {
    return <StudentHome />;
  }
  if (userRole === 'admin') {
    return <AdminHomePage />;
  }
  if (userRole === 'mentor') {
    return <MentorHomePage />;
  }

  return (
    <Layout>
      <section className="home">
        Home
        <p>You are logged in as: {userRole} </p>
        <button type="button" onClick={() => setShowModal(true)}>
          Show modal
        </button>
        <ModalWithFeedback isOpen={showModal} onSubmit={handle} />
        <hr />
        <Link to="/logout">Logout</Link>
      </section>

      <Footer />
    </Layout>
  );
};
