exports.seed = function (knex) {
  return knex('feedback')
    .del()
    .then(function () {
      return knex('feedback').insert([
        {
          student_id: 1,
          answered_by: 1,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
        {
          student_id: 5,
          answered_by: 5,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
        {
          student_id: 6,
          answered_by: 6,
          open_feedback: 'open_feedback',
          question_id: 7,
          description: 'some description',
        },
        {
          student_id: 7,
          answered_by: 7,
          open_feedback: 'open_feedback',
          question_id: 10,
          description: 'some description',
        },
        {
          student_id: 8,
          answered_by: 8,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
        {
          student_id: 9,
          answered_by: 9,
          open_feedback: 'open_feedback',
          question_id: 1,
          description: 'some description',
        },
      ]);
    });
};
