const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const createEvent = async (body) => {
  console.log(body);
  await knex('events').insert({
    event_type: body.event_type,
    event_date: body.event_date,
    venue: body.venue,
    description: body.description,
    max_participants: body.max_participants,
    created_by: body.created_by,
    created_at: moment,
    updated_at: moment,
  });

  return {
    successful: true,
  };
};

module.exports = {
  createEvent,
};
