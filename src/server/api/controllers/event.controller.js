const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const event = async (body) => {
  console.log(body);
  await knex('events').insert({
    event_type: body.event_type,
    venue: body.venue,
    description: body.description,
    created_by: body.created_by,
  });

  return {
    successful: true,
  };
};

module.exports = {
  event,
};
