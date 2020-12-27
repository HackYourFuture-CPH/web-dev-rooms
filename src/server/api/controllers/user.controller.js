const knex = require('../../config/db');

const createStudentRegistration = async (body) => {
  const organizationName = 'HYF';
  const org = await knex('organizations')
    .where('name', organizationName)
    .first('id');

  const organizationId = org.id;

  const registerStudentId = await knex('users').insert({
    name: body.name,
    slack_id: body.slackId,
    organization_id: organizationId,
    group_id: body.groupId,
  });

  const studentRole = await knex('roles').where('name', 'student').first('id');

  if (studentRole && registerStudentId) {
    const insertedUserRoleId = await knex('user_roles').insert({
      user_id: registerStudentId,
      role_id: studentRole.id,
    });

    if (insertedUserRoleId) {
      return { successful: true };
    }
  }

  return { success: false };
};

module.exports = {
  createStudentRegistration,
};
