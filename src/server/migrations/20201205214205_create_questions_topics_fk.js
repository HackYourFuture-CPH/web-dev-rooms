exports.up = function (knex) {
  return knex.schema.table('questions', function (table) {
    table
      .integer('topic')
      .unsigned()
      .references('id')
      .inTable('topics')
      .alter();
  });
};

exports.down = function (knex) {
  return knex.schema.table('questions', function (table) {
    table.dropForeign('topic');
    table.dropColumn('topic');
  });
};
