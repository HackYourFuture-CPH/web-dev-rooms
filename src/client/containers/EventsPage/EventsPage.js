import React, { useState, useEffect } from 'react';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import './EventsPage.styles.css';
import Header from '../../components/Heading/Heading';
import { CardWithEventsOrStudyGroups } from '../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';

function EventsPage() {
  const [events, setEvents] = useState([]);

  const { fetch } = useAuthenticatedFetch();

  useEffect(() => {
    fetch('/api/events').then((data) => {
      setEvents(data);
    });
  }, [fetch]);

  return (
    <>
      <AppHeader />
      <Header>Current Studygroup</Header>
      {events.map((event) => {
        return (
          <>
            <div className="group-for-class">
              Study groups {event.event_type}
            </div>
            <div className="events-page">
              <CardWithEventsOrStudyGroups
                class="events-card"
                title="HYF - Week 46"
                datetime={event.event_date}
                mentor="Benjamin"
                link={event.venue}
                key={event.id}
              >
                Register Yourself
              </CardWithEventsOrStudyGroups>
            </div>
          </>
        );
      })}
      <Footer id="footer" />
    </>
  );
}

export default EventsPage;
