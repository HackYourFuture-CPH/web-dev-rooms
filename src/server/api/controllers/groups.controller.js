const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getGroups = async () => {
  return knex('groups').select('groups.id', 'groups.name');
};

const getGroupById = async (id) => {
  const idParse = parseInt(id, 10);

  if (isNaN(idParse)) {
    throw new Error(`${id} is not a number.`);
  }
  const groups = await knex('groups')
    .select('groups.id as id', 'name')
    .where({ id });
  if (groups.length !== 1) {
    throw new Error(`there is no group with id of ${id}`);
  }
  return groups[0];
};

module.exports = {
  getGroups,
  getGroupById,
};
