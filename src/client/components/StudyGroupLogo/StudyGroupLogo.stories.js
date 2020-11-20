import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { StudyGroupLogo } from './StudyGroupLogo';
import HYFLogo from './HYF.logo.svg';
import ZendeskLogo from './Zendesk.logo.svg';
import ElasticLogo from './Elastic.logo.svg';

export default {
  title: 'StudyGroupLogo',
  decorators: [withKnobs],
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
