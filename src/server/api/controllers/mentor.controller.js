const knex = require('../../config/db');

const registerMentor = async (body) => {
  const newMentorId = await knex('users').insert({
    name: body.name,
    organization_id: body.organizationId,
    slack_id: body.slackId,
  });
  const mentorRole = await knex('roles').where('name', 'mentor').first('id');
  if (newMentorId && mentorRole) {
    await knex('user_roles').insert({
      user_id: newMentorId,
      role_id: mentorRole.id,
    });
    return {
      successful: true,
    };
  }
};

module.exports = {
  registerMentor,
};
