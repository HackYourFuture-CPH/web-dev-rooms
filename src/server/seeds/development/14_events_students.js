exports.seed = function (knex) {
  return knex('events_students')
    .del()
    .then(function () {
      return knex('events_students').insert([
        {
          id: 1,
          event_id: 1,
          student_id: 4,
        },
        {
          id: 2,
          event_id: 2,
          student_id: 5,
        },
        {
          id: 3,
          event_id: 3,
          student_id: 6,
        },
      ]);
    });
};
