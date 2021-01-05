const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const createEvent = async (body) => {
  await knex('events').insert({
    event_type: body.eventType,
    venue: body.venue,
    description: body.description,
    event_date: body.eventDate,
    created_by: body.createdBy,
  });

  return {
    successful: true,
  };
};

const getEvents = async () => {
  try {
    return await knex('events')
      .select('events.id', 'events.event_type', 'event_date', 'venue')
      .where('events.event_date', '>', knex.fn.now());
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
const editEvent = async (eventId, userId, updatedEvent) => {
  let users = [];
  await knex('users')
    .select('users.id')
    .join('user_roles', 'users.id', '=', 'user_roles.user_id')
    .where('user_roles.role_id', 3)
    .then((records) => {
      users = records.map((record) => record.id);
    });

  if (users.includes(parseInt(userId, 10))) {
    const today = moment().format('YYYY-MM-DD HH:mm:ss');

    return knex('events')
      .where({ id: eventId })
      .where('event_date', '>', today)
      .update({
        venue: updatedEvent.venue,
        max_participants: updatedEvent.maxParticipants,
        description: updatedEvent.description,
        event_date: updatedEvent.eventDate,
        event_type: updatedEvent.eventType,
        updated_at: today,
      });
  }
  return 'not an admin';
};

const deleteStudentFromEvent = async (eventId, studentId) => {
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
    .where('users.id', studentId)
    .first();
  if (user.role_name === 'Admin' || user.id === studentId) {
    const today = moment().format('YYYY-MM-DD HH:mm:ss');
    await knex('events_users')
      .where(eventId === 'event_id')
      .where(studentId === 'user_id')
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
  editEvent,
  deleteStudentFromEvent,
};
