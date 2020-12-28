const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

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
      .select('skills.id as id', 'skills.name as skillName')
      .where({ id });
    if (skills.length === 0) {
      throw new Error(`Incorrect entry with the id of ${id}`, 404);
    }
    return skills;
  } catch (error) {
    return error.message;
  }
};

const createSkill = async (body) => {
  const today = moment().format('YYYY-MM-DD HH:mm:ss');
  await knex('skills').insert({
    name: body.skillName,
    created_at: today,
    updated_at: today,
  });

  return {
    successful: true,
  };
};
const editSkill = async (skillId, body) => {
  const today = moment().format('YYYY-MM-DD HH:mm:ss');
  return knex('skills').where({ id: skillId }).update({
    name: body.skillName,
    updated_at: today,
  });
};

const deleteSkill = async (skillId) => {
  const today = moment().format('YYYY-MM-DD HH:mm:ss');
  return knex('skills').where({ id: skillId }).update({ deleted_at: today });
};

module.exports = {
  getSkills,
  getSkillById,
  createSkill,
  editSkill,
  deleteSkill,
};
