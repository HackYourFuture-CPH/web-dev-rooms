import React from 'react';
import AdminModalView from './Admin-Event-modal-view';

const students = [
  {
    id: 1,
    studentName: 'DemoStudent1',
    class: 'class 15',
    topic: 'Topic: JavaScript week3 homework,classes,Function',
    code: 'maherweb.dk',
  },
  {
    id: 2,
    studentName: 'DemoStudent2',
    class: 'class 15',
    topic: 'Topic: JavaScript week3 homework,classes,Function',
    code: 'maherweb.dk',
  },
  {
    id: 3,
    studentName: 'DemoStudent3',
    class: 'class 15',
    topic: 'Topic: JavaScript week3 homework,classes,Function',
    code: 'maherweb.dk',
  },
];
export default { title: 'AdminModalView' };
export const EventViewModal = () => (
  <AdminModalView
    eventTitle="Elastic - Week 46"
    eventDate="Wednesday | 11 Nov 20|10:00 CEST"
    mentor="madsssssssssssssssssssssssssssssssssssssssssss"
    eventLink="maherweb.dk"
    items={students}
  />
);
