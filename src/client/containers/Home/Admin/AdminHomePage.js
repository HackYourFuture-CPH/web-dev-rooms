import './AdminHomePage.styles.css';

import React from 'react';

import { Button, Heading, HelpText, Layout, Loader } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { CardWithEventsOrStudyGroups } from '../../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';
import Footer from '../../../components/footer/footer';
import ElasticLogo from '../../../components/StudyGroupLogo/Elastic.logo.svg';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';
import { useQuery } from '../../../hooks/useQuery';
import { CreateTimeSlotModal } from './CreateTimeSlotModal';
import { DeleteEventModal } from './DeleteEventModal';
import { ViewEventModal } from './ViewEventModal';

export function AdminHomePage() {
  const { data: events, loading, fetch: fetchEvents } = useQuery(`/api/events`);
  const { fetch } = useAuthenticatedFetch();

  if (loading) {
    return <Loader />;
  }

  async function cancelEvent(id) {
    await fetch(`/api/events/${id}`, { method: 'DELETE' });
    await fetchEvents();
  }

  return (
    <Layout className="admin-home-page">
      <AppHeader />
      <Heading>Current studygroups</Heading>

      <section className="events">
        {events.length > 0 ? (
          events.map((event) => (
            <CardWithEventsOrStudyGroups
              key={event.id}
              path={ElasticLogo}
              title="HYF - Week 46"
              datetime="Wednesday | 11 Nov 20|10:00 CEST"
              mentor="Benjamin"
              link="https://www.hyf.org"
            >
              <Button modal={(props) => <ViewEventModal {...props} />}>
                View
              </Button>
              <Button>Edit</Button>
              <Button
                appearance="danger"
                modal={(props) => (
                  <DeleteEventModal
                    id={event.id}
                    onDelete={cancelEvent}
                    {...props}
                  />
                )}
              >
                Cancel
              </Button>
            </CardWithEventsOrStudyGroups>
          ))
        ) : (
          <HelpText>No events yet.</HelpText>
        )}
      </section>

      <section className="self-center">
        <Button modal={(props) => <CreateTimeSlotModal {...props} />}>
          Create time slot
        </Button>
      </section>

      <Footer />
    </Layout>
  );
}
