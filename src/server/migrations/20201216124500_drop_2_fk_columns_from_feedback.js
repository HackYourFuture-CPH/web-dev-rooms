exports.up = function (knex) {
  return knex.schema.table('feedback', function (table) {
    table.dropForeign('answered_by');
    table.dropColumn('answered_by');
    table.dropForeign('question_id');
    table.dropColumn('question_id');
  });
};
exports.down = function (knex) {
  return knex.schema.table('feedback', function (table) {
    table.integer('answered_by').unsigned().references('id').inTable('users');
    table
      .integer('question_id')
      .unsigned()
      .references('id')
      .inTable('questions');
  });
};
