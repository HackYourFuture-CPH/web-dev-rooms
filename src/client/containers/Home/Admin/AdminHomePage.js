import './AdminHomePage.styles.css';

import React from 'react';
import { Button, Heading, HelpText, Layout, Loader } from '../../../components';
import { AppHeader } from '../../../components/Appheader/AppHeader.component';
import { CardWithEventsOrStudyGroups } from '../../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';
import Footer from '../../../components/footer/footer';
import ElasticLogo from '../../../components/StudyGroupLogo/Elastic.logo.svg';
import { useQuery } from '../../../hooks/useQuery';
import { CreateTimeSlotModal } from './CreateTimeSlotModal';
import { ViewEventModal } from './ViewEventModal';
import { DeleteEventModal } from './DeleteEventModal';

export function AdminHomePage() {
  const { data: events, loading } = useQuery(`/api/events`);

  if (loading) {
    return <Loader />;
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
                modal={(props) => <DeleteEventModal id={event.id} {...props} />}
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
