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
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch';
import { useUser } from '../../context/userContext';

function StudentHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const { fetch } = useAuthenticatedFetch();
  const { id } = useUser();
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
    <Layout>
      <AppHeader />
      <Avatar avatarUrl={student} name="student" />
      {isLoading && <Loader />}

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
                  Register Yourself
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

      <Footer />
    </Layout>
  );
}

export default StudentHome;
