exports.seed = function (knex) {
  return knex('questions')
    .del()
    .then(function () {
      return knex('questions').insert([
        {
          id: 1,
          topic: 1,
          asked_by: 1,
          event_id: 1,
        },
        {
          id: 2,
          topic: 2,
          asked_by: 5,
          event_id: 1,
        },
        {
          id: 3,
          topic: 3,
          asked_by: 4,
          event_id: 10,
        },
        {
          id: 4,
          topic: 4,
          asked_by: 3,
          event_id: 9,
        },
        {
          id: 5,
          topic: 5,
          asked_by: 5,
          event_id: 5,
        },
        {
          id: 6,
          topic: 6,
          asked_by: 3,
          event_id: 6,
        },
        {
          id: 7,
          topic: 7,
          asked_by: 2,
          event_id: 10,
        },
        {
          id: 8,
          topic: 8,
          asked_by: 1,
          event_id: 1,
        },
        {
          id: 9,
          topic: 9,
          asked_by: 1,
          event_id: 1,
        },
        {
          id: 10,
          topic: 10,
          asked_by: 1,
          event_id: 2,
        },
      ]);
    });
};
