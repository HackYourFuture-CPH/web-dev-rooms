import React, { useState, useEffect } from 'react';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import Footer from '../../components/footer/footer';
import './EventsPage.styles.css';
import Header from '../../components/Heading/Heading';
import { CardExampleWithHYF } from '../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups.stories';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const resp = await fetch('/api/events');
      const eventsResult = await resp.json();
      setEvents(eventsResult);
    };
    getEvents();
  }, []);

  return (
    <div className="events-page">
      <AppHeader id="app-header" />
      <Header>Current Studygroup</Header>
      <div className="group-for-class">Study groups</div>
      {events.map((event) => {
        return (
          <CardExampleWithHYF
            class="events-card"
            key={event.id}
            event={event}
          />
        );
      })}
      <Footer id="footer" />
    </div>
  );
}

export default EventsPage;
