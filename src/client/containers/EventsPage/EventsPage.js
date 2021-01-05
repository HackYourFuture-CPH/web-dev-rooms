import React, { useState, useEffect } from 'react';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import './EventsPage.styles.css';
import Header from '../../components/Heading/Heading';
import { Layout } from '../../components/Layout';
import Loader from '../../components/Loader';
import HYFLogo from '../../components/StudyGroupLogo/HYF.logo.svg';
import { CardWithEventsOrStudyGroups } from '../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/events').then((data) => {
      setIsLoading(false);
      setEvents(data);
    });
  }, [fetch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Layout className="events-page">
      <AppHeader />
      <Header>Current Studygroup</Header>
      {events.map((event) => {
        return (
          <>
            <div className="group-for-class">
              Study groups {event.event_type}
            </div>
            <CardWithEventsOrStudyGroups
              path={HYFLogo}
              title="HYF - Week 46"
              datetime={event.event_date}
              mentor="Benjamin"
              link={event.venue}
              key={event.id}
            >
              Register Yourself
            </CardWithEventsOrStudyGroups>
          </>
        );
      })}
      <Footer id="footer" />
    </Layout>
  );
}

export default EventsPage;
