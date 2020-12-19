exports.up = function (knex) {
  return knex.schema.table('questions', function (table) {
    table.string('description').defaultTo('description').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('questions', function (table) {
    table.dropColumn('description');
  });
};
