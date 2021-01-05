const knex = require('../../config/db');

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

module.exports = {
  getStudentsProfile,
};
