const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const createFeedback = async (body) => {
  await knex('feedback').insert({
    student_id: body.studentId,
    description: body.description,
    event_id: body.eventId,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createFeedback,
};
