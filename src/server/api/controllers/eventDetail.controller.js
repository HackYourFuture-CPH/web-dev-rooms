const knex = require('../../config/db');

const eventDetail = async (userId) => {
  await knex('users')
    .select(
      'name',
      'id',
      //     'events.event_date',
      // 'organizations.name',
      //   'topics.topic_name',
      //   'topics.week_number',
      //   'topics.homework_url',
    )
    // .join('organizations', 'users.organization_id', 'organizations.id')
    //     .join('roles', 'user_roles.role_id', 'roles.id')
    // .leftJoin('organizations', 'organization_id', 'organizations.id')
    .where('users.id', userId);
  //   const mentorRole = await knex('roles').where('name', 'mentor').first('id');
  //if (user) {
  //await knex('events').select('event_date').where('events.id', eventId);
  return {
    successful: true,
  };
  // }
};

module.exports = {
  eventDetail,
};
