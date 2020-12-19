const knex = require('../../config/db');
// const Error = require('../lib/utils/http-error');
// const moment = require('moment-timezone');
const createStudentRegistration = async (body) => {
  await knex('users').insert({
    name: body.name,
    group_id: body.groupId,
    organization_id: body.organizationId,
  });
  return {
    successful: true,
  };
};
module.exports = {
  createStudentRegistration,
};
