import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import ModalWithFeedback from '../../components/ModalWithFeedback/ModalWithFeedback';
import { useUser } from '../../context/userContext';

export const Home = () => {
  const { userRole } = useUser();
  const [showModal, setShowModal] = useState(false);

  function handle() {
    setShowModal(false);
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
    </Layout>
  );
};
