const knex = require('../../config/db');

const getUsers = async () => {
  try {
    const users = await knex('users')
      .select(
        'users.id',
        'users.name',
        'slack_id as slackId',
        'groups.name as groupName',
        'organizations.name as organizationName',
        'roles.name as role',
      )
      .leftJoin('user_roles', 'users.id', 'user_roles.user_id')
      .leftJoin('roles', 'user_roles.role_id', 'roles.id')
      .leftJoin('groups', 'group_id', 'groups.id')
      .leftJoin('organizations', 'organization_id', 'organizations.id');
    return users;
  } catch (err) {
    console.log(err);
  }
};
// Below: existing code for user auth by slack ID
const getUserBySlackId = async (slackId) => {
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
};

module.exports = {
  getUsers,
  getUserBySlackId,
};
