import React from 'react';

import { CardWithEventsOrStudyGroups } from './CardWithEventsOrStudyGroups';
import HYFLogo from '../StudyGroupLogo/HYF.logo.svg';
import ZendeskLogo from '../StudyGroupLogo/Zendesk.logo.svg';
import ElasticLogo from '../StudyGroupLogo/Elastic.logo.svg';

export default {
  title: 'CardWithEventsOrStudyGroups',
};

export const CardExampleWithHYF = () => (
  <>
    <CardWithEventsOrStudyGroups
      path={HYFLogo}
      title="HYF - Week 46"
      datetime="Wednesday | 11 Nov 20|10:00 CEST"
      mentor="Benjamin"
      link="https:// www.hyf.org"
    >
      Register Yourself
    </CardWithEventsOrStudyGroups>
  </>
);
export const ExampleWithElastic = () => (
  <>
    <CardWithEventsOrStudyGroups
      path={ElasticLogo}
      title="Elastic - Week 46"
      datetime="Thursday | 12 Nov 20|13:00 CEST"
      mentor="Orhan"
      link="www.hyf.org"
    >
      Register Yourself
    </CardWithEventsOrStudyGroups>
  </>
);
export const ExampleWithZendesk = () => (
  <>
    <CardWithEventsOrStudyGroups
      path={ZendeskLogo}
      title="Zendesk - Week 46"
      datetime="Friday | 11 Nov 20|10:00 CEST"
      mentor="Alisonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
      link="https:// www.hyf.org/wwwwwwwwwwwwwwwwwww"
    >
      Register Yourself
    </CardWithEventsOrStudyGroups>
  </>
);
