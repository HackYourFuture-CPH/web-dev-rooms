exports.up = function (knex) {
  return knex.schema.table('events', function (table) {
    table
      .integer('organization_id')
      .unsigned()
      .references('id')
      .inTable('organizations');
  });
};

exports.down = function (knex) {
  return knex.schema.table('events', function (table) {
    table.dropForeign('organization_id');
    table.dropColumn('organization_id');
  });
};
