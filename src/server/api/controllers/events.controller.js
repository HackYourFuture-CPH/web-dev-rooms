const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

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
  deleteEvent,
};
