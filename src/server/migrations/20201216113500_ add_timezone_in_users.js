exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.string('timezone').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('timezone');
  });
};
