exports.up = function (knex) {
  return knex.schema.table('feedback', function (table) {
    table.dropColumn('open_feedback');
  });
};
exports.down = function (knex) {
  return knex.schema.table('feedback', function (table) {
    table.string('open_feedback').notNullable();
  });
};
