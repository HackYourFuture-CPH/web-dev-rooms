import React, { useState } from 'react';
import EditEventsModal from './EditEventsModal';
import ElasticLogo from '../StudyGroupLogo/Elastic.logo.svg';

const studygroups = [
  {
    id: '01',
    value: 'Elastic',
  },
  {
    id: '02',
    value: 'Zendesk',
  },
  {
    id: '03',
    value: 'Hack Your Future',
  },
];

export default { title: 'EditEventsModal' };

export const EditNotPastEvent = () => {
  const [value, setValue] = useState('');
  const emptyInput = value === '';
  return (
    <EditEventsModal
      items={studygroups}
      value={value}
      setValue={setValue}
      heading="Edit Event (Time Slot)"
      path={ElasticLogo}
      title="Elastic - Week 46"
      datetime="Wednesday | 11 Nov 20|10:00 CEST"
      mentor="name"
      link="www.hyf.org"
      disabled={emptyInput}
    />
  );
};
