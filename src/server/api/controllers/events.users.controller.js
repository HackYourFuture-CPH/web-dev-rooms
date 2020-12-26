const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const deleteUserEventRegistration = async (userId, eventId, userIdMentor) => {
  const eventNotPassed = await knex('events')
    .select('events.id', 'events.event_date')
    .where('events.id', eventId)
    .andWhere('events.event_date', '>', knex.fn.now());

  if (eventNotPassed)
    throw new Error(
      'Bad request',
      '',
      400,
      'Event has passed or does not exist',
    );

  const validRoleToDelete = await knex('roles')
    .select('roles.id', 'roles.name')
    .where('roles.id', userIdMentor)
    .andWhere('roles.name', 'mentor')
    .orWhere('roles.name', 'admin');

  if (validRoleToDelete) throw new Error('Unauthorized', '', 403, '');

  const deleteUserEventSubscription = await knex('events_users')
    .select('events_users.users_id', 'events_users.event_id')
    .where('events_users.users_id', userId)
    .andWhere('events_users.event_id', eventId)
    .del();
  if (deleteUserEventSubscription > 0) {
    return { message: 'deleted_at is set to today' }; //
  } else {
    throw new Error(
      'Bad request',
      '',
      400,
      'User has no subscription for the event',
    );
  }
};

module.exports = {
  deleteUserEventRegistration,
};
