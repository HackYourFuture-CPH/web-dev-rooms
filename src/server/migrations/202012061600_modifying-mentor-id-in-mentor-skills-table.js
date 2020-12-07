exports.up = function (knex) {
  return knex.schema.table('mentors_skills', function (table) {
    table
      .integer('mentor_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .alter();
  });
};

exports.down = function (knex) {
  return knex.schema.table('mentors_skills', function (table) {
    table.dropForeign('mentor_id');
    table.dropColumn('mentor_id');
  });
};
