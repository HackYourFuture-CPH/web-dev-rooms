import React from 'react';
import EventsPageComplete from './EventsPageComplete';
import ZendeskLogo from '../StudyGroupLogo/Zendesk.logo.svg';

export default { title: 'EventsPageComplete' };

export const Complete = () => (
  <EventsPageComplete
    path={ZendeskLogo}
    title="Zendesk - Week 46"
    datetime="Thursday | 12 Nov 20|13:00 CEST"
    mentor="Fredrik"
    link="www.hyf.org"
  >
    Register Yourself
  </EventsPageComplete>
);
