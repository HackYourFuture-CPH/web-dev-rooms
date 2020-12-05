const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getSkills = async () => {
  try {
    return await knex('skills').select('skills.id', 'skills.name');
  } catch (error) {
    return error.message;
  }
};

const getSkillById = async (id) => {
  try {
    const skills = await knex('skills')
      .select('skills.id as id', 'name')
      .where({ id });
    if (skills.length === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    }
    return skills;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getSkills,
  getSkillById,
};
