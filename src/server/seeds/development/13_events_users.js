exports.seed = function (knex) {
  return knex('events_users')
    .del()
    .then(function () {
      return knex('events_users').insert([
        {
          id: 1,
          users_id: 1,
          event_id: 1,
        },
        {
          id: 2,
          users_id: 2,
          event_id: 2,
        },
        {
          id: 3,
          users_id: 3,
          event_id: 3,
        },
        {
          id: 4,
          users_id: 5,
          event_id: 4,
        },
        {
          id: 5,
          users_id: 4,
          event_id: 5,
        },
        {
          id: 6,
          users_id: 6,
          event_id: 1,
        },
      ]);
    });
};
