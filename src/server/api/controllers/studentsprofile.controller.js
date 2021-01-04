const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getStudentsProfile = async () => {
  try {
    return await knex('students_profile').select(
      'name',
      'group_id',
      'group_name',
      'time_zone',
    );
  } catch (error) {
    return error.message;
  }
};

const getStudentProfileById = async (id) => {
  try {
    const event = await knex('students_profile')
      .select('group_id as id', 'name')
      .where({ id });
    if (event.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return event;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getStudentsProfile,
  getStudentProfileById,
};
