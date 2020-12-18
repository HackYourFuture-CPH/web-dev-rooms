exports.seed = function (knex) {
  return knex('feedback')
    .del()
    .then(function () {
      return knex('feedback').insert([
        {
          id: 1,
          student_id: 1,
          answered_by: 1,
          open_feedback: 'very informative',
          question_id: 1,
          description: 'issue solved',
        },
        {
          id: 2,
          student_id: 5,
          answered_by: 5,
          open_feedback: 'good ',
          question_id: 1,
          description: 'detailed explanation',
        },
        {
          id: 3,
          student_id: 6,
          answered_by: 6,
          open_feedback: 'very good',
          question_id: 7,
          description: 'advanced concepts explained, as well',
        },
        {
          id: 4,
          student_id: 7,
          answered_by: 7,
          open_feedback: 'brilliant session',
          question_id: 10,
          description: 'issue solved with in-depth explanation of the concept',
        },
        {
          id: 5,
          student_id: 8,
          answered_by: 8,
          open_feedback: 'good',
          question_id: 1,
          description: 'quite advanced for my understanding',
        },
        {
          id: 6,
          student_id: 9,
          answered_by: 9,
          open_feedback: 'very good',
          question_id: 1,
          description: 'very helpful and simple explanation',
        },
      ]);
    });
};
