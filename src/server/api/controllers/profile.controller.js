const knex = require('../../config/db');

const getStudentsProfile = async (userId) => {
  try {
    const profile = await knex('users')
      .select(
        'users.name',
        'users.group_id as groupId',
        'groups.name as groupName',
        'users.timezone',
      )
      .leftJoin('groups', 'group_id', 'groups.id')
      .where('users.id', userId);
    return profile[0];
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getStudentsProfile,
};
