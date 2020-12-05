const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getUserById = async (id) => {
  try {
    const eventUsers = await knex
      .select('ev.id', 'ev.event_date', 'ev.created_at')
      .from('events_users AS eu')
      .leftJoin('events_students AS es', 'es.student_id', 'eu.id')
      .leftJoin('events AS ev', 'ev.id', 'es.event_id')
      .where('eu.users_id', '=', id)
      .first();
    return eventUsers;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getUserById,
};
