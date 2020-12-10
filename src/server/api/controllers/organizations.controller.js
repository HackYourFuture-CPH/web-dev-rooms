const knex = require('../../config/db');

const getOrganizations = async () => {
  try {
    const organizations = await knex('organizations').select(
      'id',
      'name',
      'image_url',
    );

    return organizations;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getOrganizations,
};
