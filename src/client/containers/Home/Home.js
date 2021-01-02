import React from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../../context/userContext';

export const Home = () => {
  const { userRole } = useUser();

  return (
    <section className="home">
      Home
      <p>You are logged in as: {userRole} </p>
      <Link to="/logout">Logout</Link>
    </section>
  );
};
