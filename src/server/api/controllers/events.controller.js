const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

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

const deleteEvent = async (userId, eventId) => {
  const user = await knex('users')
    .select(
      'users.name',
      'users.id',
      'user_id',
      'role_id',
      'roles.name as role_name',
    )
    .join('user_roles', 'users.id', 'user_roles.user_id')
    .join('roles', 'user_roles.role_id', 'roles.id')
    .where('users.id', userId)
    .first();
  if (user && user.role_name === 'Admin') {
    const today = moment().format('YYYY-MM-DD HH:mm:ss');
    await knex('events')
      .where('id', eventId)
      .where('event_date', '>', today)
      .whereNull('deleted_at')
      .update({ deleted_at: today });
  } else {
    throw new Error('Unauthorized', 403);
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  deleteEvent,
};
