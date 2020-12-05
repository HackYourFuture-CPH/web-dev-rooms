exports.seed = function (knex) {
  return knex('events')
    .del()
    .then(function () {
      return knex('events').insert([
        {
          id: 1,
          event_type: 'study_group',
          venue: 'meeting link',
          event_date: '2020-11-18 10:00',
          description: 'this is study_group event with Elastic',
          maxParticipants: 2,
          created_by: 1,
        },
        {
          id: 2,
          event_type: 'study_group',
          venue: 'meeting link',
          event_date: '2020-11-18 12:00',
          description: 'this is study_group event at HYF office ',
          maxParticipants: 2,
          created_by: 2,
        },
        {
          id: 3,
          event_type: 'study_group',
          venue: 'meeting link',
          event_date: '2020-11-18 16:00',
          description: 'this is study_group event with Zendesk',
          maxParticipants: 50,
          created_by: 3,
        },
        {
          id: 4,
          event_type: 'study_group',
          venue: 'meeting link',
          event_date: '2020-11-18 16:00',
          description: 'this is study_group event with Zendesk',
          maxParticipants: 50,
          created_by: 4,
        },
        {
          id: 5,
          event_type: 'study_group',
          venue: 'meeting link',
          event_date: '2020-11-18 16:00',
          description: 'this is study_group event with Zendesk',
          maxParticipants: 50,
          created_by: 5,
        },
      ]);
    });
};
