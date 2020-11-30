exports.up = function (knex) {
  return knex.schema.createTable('feedback', (table) => {
    table.increments();
    table.integer('student_id').unsigned().references('id').inTable('users');
    table.integer('answered_by').unsigned().references('id').inTable('users');
    table.string('open_feedback').notNullable();
    table
      .integer('question_id')
      .unsigned()
      .references('id')
      .inTable('questions');
    table.string('description').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('feedback');
};
