exports.seed = function (knex) {
  return knex('feedback')
    .del()
    .then(function () {
      return knex('feedback').insert([
        {
          id: 1,
          student_id: 3,
          answered_by: 1,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
        {
          id: 2,
          student_id: 3,
          answered_by: 5,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
        {
          id: 3,
          student_id: 3,
          answered_by: 1,
          open_feedback: 'open_feedback',
          question_id: 7,
          description: 'some description',
        },
        {
          id: 4,
          student_id: 3,
          answered_by: 1,
          open_feedback: 'open_feedback',
          question_id: 10,
          description: 'some description',
        },
        {
          id: 5,
          student_id: 3,
          answered_by: 1,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
        {
          id: 6,
          student_id: 3,
          answered_by: 1,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
      ]);
    });
};
