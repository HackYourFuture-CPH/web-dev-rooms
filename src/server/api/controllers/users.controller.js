const knex = require('../../config/db');

async function getUserBySlackId(slackId) {
  const query = knex('users')
    .select('users.id', 'roles.name as role')
    .leftJoin('user_roles', 'users.id', 'user_roles.user_id')
    .leftJoin('roles', 'user_roles.role_id', 'roles.id')
    .where('users.slack_id', slackId);

  const users = await query;

  if (users.length === 0) {
    return {
      role: undefined,
      isNewUser: true,
    };
  }

  const user = users[0];

  return {
    ...user,
    isNewUser: !user.role,
  };
}

module.exports = {
  getUserBySlackId,
};
