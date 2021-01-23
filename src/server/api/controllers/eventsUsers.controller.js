const knex = require('../../config/db');
const moment = require('moment-timezone');

const {
  formatDate,
  formatTime,
  getDayOfWeek,
  getWeekNumber,
} = require('./helpers');

const getEventsForUser = async (userId) => {
  const today = moment().format('YYYY-MM-DD HH:mm:ss');

  try {
    const userEvents = await knex('events')
      .select(
        'events.id as eventId',
        'organizations.name as organization',
        'organizations.id as organizationId',
        'organizations.image_url as organizationImageUrl',
        'events.event_date as dateTime',
        'events.venue as link',
      )
      .join('events_users', 'events.id', 'events_users.event_id')
      .join('users', 'events_users.users_id', 'users.id')
      .join('organizations', 'users.organization_id', 'organizations.id')
      .where('users.id', userId)
      .where('events.event_date', '>', today)
      .whereNull('events_users.deleted_at')
      .whereNull('events.deleted_at');

    return userEvents.map((userEvent) => ({
      eventId: userEvent.eventId,
      organization: userEvent.organization,
      organizationId: userEvent.organizationId,
      organizationImageUrl: userEvent.organizationImageUrl,
      date: formatDate(userEvents[0].dateTime),
      time: formatTime(userEvents[0].dateTime),
      weekNumber: getWeekNumber(userEvents[0].dateTime),
      day: getDayOfWeek(userEvents[0].dateTime),
      link: userEvent.link,
    }));
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getEventsForUser,
};
