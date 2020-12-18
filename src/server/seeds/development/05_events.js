exports.seed = function (knex) {
  return knex('events')
    .del()
    .then(function () {
      return knex('events').insert([
        {
          id: 1,
          created_by: 2,
          event_type: 'study_group',
          venue: 'meeting link ',
          event_date: '2020-11-18 10:00',
          description: 'this is study_group event with Elastic',
          max_participants: 2,
        },
        {
          id: 2,
          created_by: 3,
          event_type: 'workshop',
          venue: 'meeting link',
          event_date: '2020-11-18 12:00',
          description: 'this is study_group event at HYF office ',
          max_participants: 2,
        },
        {
          id: 3,
          created_by: 4,
          event_type: 'other',
          venue: 'meeting link',
          event_date: '2020-11-18 16:00',
          description: 'this is study_group event on hyf office',
          max_participants: 2,
        },
        {
          id: 4,
          created_by: 4,
          event_type: 'study_group',
          venue: 'meeting link',
          event_date: '2020-11-18 16:00',
          description: 'this is study_group event with Zendesk',
          max_participants: 2,
        },
        {
          id: 5,
          created_by: 5,
          event_type: 'study_group',
          venue: 'meeting link',
          event_date: '2020-11-18 16:00',
          description: 'this is study_group event with Zendesk',
          max_participants: 2,
        },
      ]);
    });
};
