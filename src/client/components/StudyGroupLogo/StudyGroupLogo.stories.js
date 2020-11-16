import React from 'react';
import { withKnobs, files } from '@storybook/addon-knobs';

import { StudyGroupLogo } from './StudyGroupLogo';

export default {
  title: 'StudyGroupLogo',
  decorators: [withKnobs],
};

export const DefaultUsage = () => (
  <>
    <StudyGroupLogo path={files('Images', '.svg')} />
  </>
);
