import './StudentHome.styles.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import student from '../../assets/images/student.png';
import { Heading } from '../../components';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import { Avatar } from '../../components/Avatar/Avatar';
import Footer from '../../components/footer/footer';
import { Layout } from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { useUser } from '../../context/userContext';
import { useQuery } from '../../hooks/useQuery';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';
import { NoRegisteredEvents } from './NoRegisteredEvents';
import { RegisteredEvent } from './RegisteredEvent';

function StudentHome() {
  const {
    user: { name },
  } = useUser();
  const { data: events, loading, fetch: fetchEvents } = useQuery(
    `/api/events/registered`,
  );
  const { fetch } = useAuthenticatedFetch();

  if (loading) {
    return <Loader />;
  }

  async function cancelRegistration(eventId) {
    try {
      await fetch(`/api/events/${eventId}/cancel`, { method: 'POST' });
      toast('Your registration has been cancelled!');
      fetchEvents();
    } catch (e) {
      // Until we think of a good error handling mechanism
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  return (
    <Layout className="student-home-page">
      <section className="profile-header">
        <AppHeader />
        <Avatar avatarUrl={student} name="student" />
      </section>

      {loading && <Loader />}

      <Heading>Welcome {name}</Heading>

      {events.length === 0 ? (
        <NoRegisteredEvents />
      ) : (
        <>
          {events.map((event) => (
            <RegisteredEvent
              key={event.eventId}
              event={event}
              onCancelRegistration={() => cancelRegistration(event.eventId)}
            />
          ))}
        </>
      )}

      <Link to="/events">Find more events</Link>

      <Footer />
    </Layout>
  );
}

export default StudentHome;
