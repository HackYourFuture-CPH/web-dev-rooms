import React from 'react';

import { CancleButtonWithEventsStudyGroup } from './CancleButtonWithEventsStudyGroups';
import HYFLogo from '../StudyGroupLogo/HYF.logo.svg';
import ZendeskLogo from '../StudyGroupLogo/Zendesk.logo.svg';
import ElasticLogo from '../StudyGroupLogo/Elastic.logo.svg';

export default {
  title: 'Components | CancleButtonWithEventsStudyGroup',
};

export const CardExampleWithHYF = () => (
  <>
    <CancleButtonWithEventsStudyGroup
      path={HYFLogo}
      title="HYF - Week 46"
      datetime="Wednesday | 11 Nov 20|10:00 CEST"
      mentor="Benjamin"
      link="https:// www.hyf.org"
    >
      Cancel registration
    </CancleButtonWithEventsStudyGroup>
  </>
);
export const ExampleWithElastic = () => (
  <>
    <CancleButtonWithEventsStudyGroup
      path={ElasticLogo}
      title="Elastic - Week 46"
      datetime="Thursday | 12 Nov 20|13:00 CEST"
      mentor="Orhan"
      link="www.hyf.org"
    >
      Cancel registration
    </CancleButtonWithEventsStudyGroup>
  </>
);
export const ExampleWithZendesk = () => (
  <>
    <CancleButtonWithEventsStudyGroup
      path={ZendeskLogo}
      title="Zendesk - Week 46"
      datetime="Friday | 11 Nov 20|10:00 CEST"
      mentor="Alisonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
      link="https:// www.hyf.org/wwwwwwwwwwwwwwwwwww"
    >
      Cancel registration
    </CancleButtonWithEventsStudyGroup>
  </>
);
