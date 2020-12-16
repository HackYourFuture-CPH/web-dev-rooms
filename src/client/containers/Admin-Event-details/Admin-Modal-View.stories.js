import React from 'react';
import AdminModalView from './Admin-Event-modal-view';
import PropTypes, { shape } from 'prop-types';

const students = [
  {
    studentName: 'DemoStudent1',
    class: 'class 15',
    topic: 'Topic: JavaScript week3 homework,classes,Function',
    code: 'maherweb.dk',
  },
  {
    studentName: 'DemoStudent2',
    class: 'class 15',
    topic: 'Topic: JavaScript week3 homework,classes,Function',
    code: 'maherweb.dk',
  },
  {
    studentName: 'DemoStudent3',
    class: 'class 15',
    topic: 'Topic: JavaScript week3 homework,classes,Function',
    code: 'maherweb.dk',
  },
];

function ViewModalForEvent({ items }) {
  return (
    <AdminModalView
      eventTitle="Elastic - Week 46"
      eventDate="Wednesday | 11 Nov 20|10:00 CEST"
      mentor="madsssssssssssssssssssssssssssssssssssssssssss"
      eventLink="maherweb.dk"
      items={items}
    />
  );
}

ViewModalForEvent.prototype = {
  items: PropTypes.arrayOf(
    shape({
      studentName: PropTypes.string,
      class: PropTypes.string,
      topic: PropTypes.string,
      code: PropTypes.string,
    }),
  ),
};
ViewModalForEvent.defaultProps = {
  items: [],
};
export default { title: 'AdminModalView' };
export const EventViewModal = () => <ViewModalForEvent items={students} />;
