import React, { useState } from 'react';
import EditEventsModal from './EditEventsModal';
import ElasticLogo from '../StudyGroupLogo/Elastic.logo.svg';
import PropTypes, { shape } from 'prop-types';

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

const EditEvents = ({ items }) => {
  const [value, setValue] = useState('');
  return (
    <EditEventsModal
      items={items}
      value={value}
      setValue={setValue}
      heading="Edit Event (Time Slot)"
      path={ElasticLogo}
      title="Elastic - Week 46"
      datetime="Wednesday | 11 Nov 20|10:00 CEST"
      mentor="name"
      link="www.hyf.org"
    >
      <p>description of modal</p>
    </EditEventsModal>
  );
};

EditEvents.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

EditEvents.defaultProps = {
  items: [],
};

export default { title: 'EditEventsModal' };

export const Studygroup = () => <EditEvents items={studygroups} />;
