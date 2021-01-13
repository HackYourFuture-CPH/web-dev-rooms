const knex = require('../../config/db');

const eventDetail = async (eventId) => {
  const details = await knex('events')
    .select(
      'users.name as Student name',
      'questions.description',
      'events.event_date as Event date',
      'topics.topic_name as Topic',
      'topics.week_number as Week number',
      'topics.homework_url as Link',
      'organizations.name as Organization name',
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
