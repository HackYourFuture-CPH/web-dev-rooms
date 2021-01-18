/* eslint-disable no-unused-vars */
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

const editStudentProfile = async (userId, body) => {
  try {
    const studentData = await knex('users')
      .select('users.name', 'users.timezone')
      .leftJoin('user_roles', 'users.id', 'user_roles.user_id')
      .leftJoin('roles', 'user_roles.role_id', 'roles.id')
      .where('roles.name', 'student')
      .where({ id: userId });
    if (studentData.length === 0) {
      throw new Error(`incorrect entry with the id of ${userId}`, 404);
    } else {
      await knex('users').where({ id: userId }).update({
        name: body.name,
        timezone: body.timezone,
      });
    }
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
    const profiles = await knex('users')
      .select('users.name', 'users.admin_role as adminRole')
      .join('user_roles', 'users.id', 'user_roles.user_id')
      .join('roles', 'user_roles.role_id', 'roles.id')
      .where('users.id', userId)
      .where('roles.name', 'admin');
    return profiles[0];
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getStudentsProfile,
  editStudentProfile,
  getAdminsProfile,
};
