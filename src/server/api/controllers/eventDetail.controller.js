const knex = require('../../config/db');

const eventDetail = async (eventId) => {
  const details = await knex('events')
    .select(
      'users.name as name',
      'questions.description',
      'events.event_date as eventDate',
      'topics.topic_name as topic',
      'topics.week_number as weekNumber',
      'topics.homework_url as link',
      'organizations.name as organization',
    )
    .leftJoin('events_users', 'events.id', 'events_users.event_id')
    .leftJoin('users', 'events_users.users_id', 'users.id')
    .leftJoin('questions', 'events_users.users_id', 'questions.asked_by')
    .leftJoin('topics', 'topics.id', 'questions.topic')
    .leftJoin('organizations', 'events.organization_id', 'organizations.id')
    .where('events.id', eventId);
  return details;
};

module.exports = {
  eventDetail,
};
