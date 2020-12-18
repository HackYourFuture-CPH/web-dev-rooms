const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const createEvent = async (body) => {
  await knex('events').insert({
    event_type: body.eventType,
    venue: body.venue,
    description: body.description,
    created_by: body.createdBy,
  });

  return {
    successful: true,
  };
};

const getEvents = async () => {
  try {
    return await knex('events').select(
      'events.id',
      'events.event_type',
      'event_date',
      'venue',
      'max_participants',
      'description',
    );
  } catch (error) {
    return error.message;
  }
};

const getEventById = async (id) => {
  try {
    const event = await knex('events')
      .select('events.id as id', 'event_type')
      .where({ id });
    if (event.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return event;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
};
