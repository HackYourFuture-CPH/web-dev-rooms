import React from 'react';

import { StudyGroupLogo } from './StudyGroupLogo';
import HYFLogo from './HYF.logo.svg';
import ZendeskLogo from './Zendesk.logo.svg';
import ElasticLogo from './Elastic.logo.svg';

export default {
  title: 'StudyGroupLogo',
};

export const ExampleWithHYF = () => (
  <>
    <StudyGroupLogo path={HYFLogo} />
  </>
);
export const ExampleWithElastic = () => (
  <>
    <StudyGroupLogo path={ZendeskLogo} />
  </>
);
export const ExampleWithZendesk = () => (
  <>
    <StudyGroupLogo path={ElasticLogo} />
  </>
);
