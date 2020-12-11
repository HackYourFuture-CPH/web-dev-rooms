const knex = require('../../config/db');

const getOrganizations = async () => {
  try {
    const organizations = await knex('organizations').select(
      'id',
      'name',
      'organizations.image_url as imageUrl ',
    );

    return organizations;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getOrganizations,
};
