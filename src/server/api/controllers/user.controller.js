const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');

const createStudentRegistration = async (body) => {
  console.log(body);
  // @TODO validate incoming parameters
  // - check existence and data types are as needed

  const ORGANIZATION_NAME = 'HYF';

  // get organization ID
  const row = await knex('organizations')
    .where('name', ORGANIZATION_NAME)
    .first('id');

  organizationId = row.id;

  // Create the student record in the users table

  const insertedId = await knex('users')
    .insert({
      name: body.name,
      slack_id: body.slackId,
      organization_id: organizationId,
      group_id: body.groupId,
    })
    .returning('id');

  if (insertedId) {
    return { success: true };
  } else {
    return { success: false };
  }
};

module.exports = {
  createStudentRegistration,
};
