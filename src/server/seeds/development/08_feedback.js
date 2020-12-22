exports.seed = function (knex) {
  return knex('feedback')
    .del()
    .then(function () {
      return knex('feedback').insert([
        {
          id: 1,
          student_id: 1,
          event_id: 1,
          description: 'issue solved',
        },
        {
          id: 2,
          student_id: 5,
          event_id: 5,
          description: 'detailed explanation',
        },
        {
          id: 3,
          student_id: 6,
          event_id: 4,
          description: 'advanced concepts explained, as well',
        },
        {
          id: 4,
          student_id: 7,
          event_id: 3,
          description: 'issue solved with in-depth explanation of the concept',
        },
        {
          id: 5,
          student_id: 8,
          event_id: 2,
          description: 'quite advanced for my understanding',
        },
        {
          id: 6,
          student_id: 9,
          event_id: 4,
          description: 'very helpful and simple explanation',
        },
      ]);
    });
};
