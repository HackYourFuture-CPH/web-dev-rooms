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

const getAdminsProfile = async (userId) => {
  /* SQL query to get all the admins 
  SELECT users.name, roles.name
  FROM users 
  join user_roles on users.id = user_roles.user_id 
  join roles on user_roles.role_id = roles.id
  where roles.name= "admin";
  */
  try {
    const profile = await knex('users')
      .select('users.name', 'users.admin_role')
      .join('user_roles', 'users.id', 'user_roles.user_id')
      .join('roles', 'user_roles.role_id', 'roles.id')
      .where('users.id', userId);
    return profile;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getStudentsProfile,
  getAdminsProfile,
};
