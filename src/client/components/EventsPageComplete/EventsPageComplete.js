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
  const [events, setEvents] = useState('');

  useEffect(() => {
    const getEvents = async () => {
      const resp = await fetch('/api/events');
      const eventsResult = await resp.json();
      console.log('eventsResult', eventsResult);
      setEvents(eventsResult);
    };
    getEvents();
  }, []);

  return (
    <div className="events-page">
      <AppHeader id="app-header" />
      <Header>Current Studygroup</Header>
      <div className="group-for-class">Study groups for class15</div>
      <CardExampleWithHYF class="events-card" />
      <ExampleWithElastic class="events-card" />
      <ExampleWithZendesk />
      <Footer id="footer" />
    </div>
  );
}

export default EventsPageComplete;
