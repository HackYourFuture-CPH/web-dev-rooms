import React from 'react';

import ModalWithFeedback from './ModalWithFeedback';

export default { title: 'Modal with feedback' };

export const modalwithfeedback = () => (
  <ModalWithFeedback
    placeholder=" You just attended the study group with student1, student2, student3, student4......."
    title="Elastic - Week 46"
    datetime="Wednesday | 11 Nov 20|10:00 CEST"
    mentor="'Mentor Name'"
    link="https://slack.com/meeting...."
  />
);
