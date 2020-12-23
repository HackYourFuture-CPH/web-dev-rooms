const knex = require('../../config/db');

const registerMentor = async (body) => {
  await knex('users').insert({
    name: body.name,
    organization_id: body.organization_id,
  });

  return {
    successful: true,
  };
};

module.exports = {
  registerMentor,
};
