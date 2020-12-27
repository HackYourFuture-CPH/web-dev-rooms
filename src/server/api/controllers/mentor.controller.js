const knex = require('../../config/db');

const registerMentor = async (body) => {
  const insertNewMentor = await knex('users').insert({
    name: body.name,
    organization_id: body.organizationId,
    slack_id: body.slackId,
  });
  const getMentorId = await knex('roles').where('name', 'mentor').first('id');
  if (insertNewMentor && getMentorId) {
    await knex('user_roles').insert({
      user_id: insertNewMentor,
      role_id: getMentorId.id,
    });
    return {
      successful: true,
    };
  }
};

module.exports = {
  registerMentor,
};
