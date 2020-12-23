const knex = require('../../config/db');

const createStudentRegistration = async (body) => {
  const organizationName = 'HYF';
  const org = await knex('organizations')
    .where('name', organizationName)
    .first('id');

  organizationId = org.id;

  const registerStudent = await knex('users').insert({
    name: body.name,
    slack_id: body.slackId,
    organization_id: organizationId,
    group_id: body.groupId,
  });

  if (registerStudent) {
    return { success: true };
  } else {
    return { success: false };
  }
};

module.exports = {
  createStudentRegistration,
};
