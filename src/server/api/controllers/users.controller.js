const knex = require('../../config/db');

async function getUserBySlackId(slackId) {
  const users = await await knex('users')
    .select('users.id', 'roles.name as role')
    .join('user_roles', 'users.id', 'user_roles.user_id')
    .join('roles', 'user_roles.role_id', 'roles.id')
    .where('users.slack_id', slackId);

  if (users.length === 0) {
    return {
      role: undefined,
      isNewUser: true,
    };
  }

  const user = users[0];

  return {
    ...user,
    isNewUser: false,
  };
}

module.exports = {
  getUserBySlackId,
};
