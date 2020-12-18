exports.up = function (knex) {
  return knex.schema.table('events_users', function (table) {
    table.dropColumn('comment');
    table.dropColumn('status');
  });
};
exports.down = function (knex) {
  return knex.schema.table('events_users', function (table) {
    table.string('status').notNullable();
    table.string('comment').notNullable();
  });
};
