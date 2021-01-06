import './StudentHome.styles.css';

import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { Button, Heading } from '../../components';
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
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';
import { useUser } from '../../context/userContext';
import { Link } from 'react-router-dom';

function StudentHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const { fetch } = useAuthenticatedFetch();
  const {
    id,
    user: { name },
  } = useUser();
  const cardTitle = 'No events to show here';
  const cardText =
    'There are no events to show here maybe  you did not book any event yet. Please go to events page and book an event';
  useEffect(() => {
    fetch(`/api/eventsUsers/${id}`).then((data) => {
      setEvents(data);
      setIsLoading(false);
    });
  }, [fetch, id]);

  return (
    <Layout className="student-home-page">
      <section className="profile-header">
        <AppHeader />
        <Avatar avatarUrl={student} name="student" />
      </section>

      {isLoading && <Loader />}

      <Heading>Welcome {name}</Heading>

      {events.length === 0 ? (
        <Card title={cardTitle} text={cardText} />
      ) : (
        <div>
          {events.map((event) => (
            <div key={event.eventID}>
              {event.organization === 'HYF' && (
                <CardWithEventsOrStudyGroups
                  path={HYFLogo}
                  title={`HYF - Week ${event.weekNumber}`}
                  datetime={`${event.day} | ${event.date}|${event.time} CEST`}
                  mentor="Benjamin"
                  link={event.link}
                >
                  <Button>Register Yourself</Button>
                </CardWithEventsOrStudyGroups>
              )}
              {event.organization === 'Elastic ' && (
                <CardWithEventsOrStudyGroups
                  path={ElasticLogo}
                  title={`Elastic - Week ${event.weekNumber}`}
                  datetime={`${event.day} | ${event.date}|${event.time} CEST`}
                  mentor="Benjamin"
                  link={event.link}
                >
                  Register Yourself
                </CardWithEventsOrStudyGroups>
              )}
              {event.organization === 'Zendesk' && (
                <CardWithEventsOrStudyGroups
                  path={ZendeskLogo}
                  title={`Zendesk - Week ${event.weekNumber}`}
                  datetime={`${event.day} | ${event.date}|${event.time} CEST`}
                  mentor="Benjamin"
                  link={event.link}
                >
                  Register Yourself
                </CardWithEventsOrStudyGroups>
              )}
            </div>
          ))}
        </div>
      )}

      <Link to="/events">Find more events</Link>

      <Footer />
    </Layout>
  );
}

export default StudentHome;
