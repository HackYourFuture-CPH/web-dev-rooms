exports.seed = function (knex) {
  return knex('events_mentors')
    .del()
    .then(function () {
      return knex('events_mentors').insert([
        {
          id: 1,
          event_id: 1,
          mentor_id: 1,
          status: true,
        },
        {
          id: 2,
          event_id: 2,
          mentor_id: 1,
          status: false,
        },
        {
          id: 3,
          event_id: 3,
          mentor_id: 1,
          status: true,
        },
      ]);
    });
};
