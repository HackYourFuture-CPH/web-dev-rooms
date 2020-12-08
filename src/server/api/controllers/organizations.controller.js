const HttpError = require('../lib/utils/http-error');
const knex = require('../../config/db');

const getOrganizations = async (req) => {
  try {
    return await knex('organizations').select('id', ' name', 'imageUrl');
  } catch (err) {
    console.log(err);
  }
};

const getOrganizationsById = async (id) => {
  try {
    const organization = await knex('organizations')
      .select('organizations.id as id', 'name', 'imageUrl')
      .where({ id: id });
    if (organization.length === 0) {
      throw new HttpError(
        'Bad request',
        `Cannot find organization with ID ${id}!`,
        404,
      );
    }
    return organization;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getOrganizations,
  getOrganizationsById,
};
