const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const createFeedback = async (body) => {
  console.log(body);
  await knex('feedback').insert({
    student_id: body.student_id,
    answered_by: body.answered_by,
    question_id: body.question_id,
    open_feedback: body.open_feedback,
    description: body.description,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createFeedback,
};


