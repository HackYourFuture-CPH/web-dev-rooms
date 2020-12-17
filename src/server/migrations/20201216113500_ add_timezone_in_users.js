exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.string('timezone').defaultTo('UTC+1:00').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('timezone');
  });
};
