import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import Loader from '../../components/Loader/Loader';
import { AppHeader } from '../../components/Appheader/AppHeader.component';
import { Avatar } from '../../components/Avatar/Avatar';
import student from '../../assets/images/student.png';
import { Card } from '../../components/Card/Card';
import { CardWithEventsOrStudyGroups } from '../../components/CardWithEventsOrStudyGroups/CardWithEventsOrStudyGroups';
import HYFLogo from '../../components/StudyGroupLogo/HYF.logo.svg';
import ZendeskLogo from '../../components/StudyGroupLogo/Zendesk.logo.svg';
import ElasticLogo from '../../components/StudyGroupLogo/Elastic.logo.svg';
import Footer from '../../components/footer/footer';

function StudentHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const cardTitle = 'No events to show here';
  const cardText =
    'There are no events to show here maybe  you did not book any event yet. Please go to events page and book an event';
  useEffect(() => {
    axios.get('/api/events').then((response) => {
      setEvents(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout>
      <AppHeader />
      <Avatar avatarUrl={student} name="student" />
      {isLoading && <Loader />}

      {events.length === 0 ? (
        <Card title={cardTitle} text={cardText} />
      ) : (
        <div>
          {events.map((event) => (
            <div>
              {event.organizationId === 1 && (
                <CardWithEventsOrStudyGroups
                  path={HYFLogo}
                  title="HYF - Week 46"
                  datetime="Wednesday | 11 Nov 20|10:00 CEST"
                  mentor="Benjamin"
                  link={event.venue}
                >
                  Register Yourself
                </CardWithEventsOrStudyGroups>
              )}
              {event.organizationId === 2 && (
                <CardWithEventsOrStudyGroups
                  path={ElasticLogo}
                  title="Elastic - Week 46"
                  datetime="Wednesday | 11 Nov 20|10:00 CEST"
                  mentor="Daniel"
                  link={event.venue}
                >
                  Register Yourself
                </CardWithEventsOrStudyGroups>
              )}
              {event.organizationId === 3 && (
                <CardWithEventsOrStudyGroups
                  path={ZendeskLogo}
                  title="Zendesk - Week 46"
                  datetime="Wednesday | 11 Nov 20|10:00 CEST"
                  mentor="Toni"
                  link={event.venue}
                >
                  Register Yourself
                </CardWithEventsOrStudyGroups>
              )}
            </div>
          ))}
        </div>
      )}

      <Footer />
    </Layout>
  );
}

export default StudentHome;
