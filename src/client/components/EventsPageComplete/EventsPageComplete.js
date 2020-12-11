import React, { useState, useEffect } from 'react';
import { AppHeader } from '../Appheader/AppHeader.component';
import Footer from '../footer/footer';
import './EventsPageComplete.styles.css';
import Header from '../Heading/Heading';
import {
  CardExampleWithHYF,
  ExampleWithElastic,
  ExampleWithZendesk,
} from '../CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups.stories';

function EventsPageComplete() {
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
      <div className="group-for-class">Study groups for class15</div>
      {events.map((event) => {
        return (
          <CardExampleWithHYF
            class="events-card"
            key={event.id}
            event={event}
          />
        );
      })}
      {events.map((event) => {
        return (
          <ExampleWithElastic
            class="events-card"
            key={event.id}
            event={event}
          />
        );
      })}
      {events.map((event) => {
        return (
          <ExampleWithZendesk
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

export default EventsPageComplete;
