const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getStudentsProfile = async () => {
  try {
    const studentsProfile = await knex('users')
      .select('name', 'group_id', 'groups.name as group_name', 'timezone')
      .leftJoin('groups', 'group_id', 'groups.id')
      .leftJoin('groups', 'group_name', 'groups.name');
    return studentsProfile;
  } catch (error) {
    return error.message;
  }
};

const getStudentProfileById = async (id) => {
  try {
    const studentProfile = await knex('users')
      .select('group_id as id', 'name')
      .where({ id });
    if (studentProfile.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return studentProfile;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getStudentsProfile,
  getStudentProfileById,
};
