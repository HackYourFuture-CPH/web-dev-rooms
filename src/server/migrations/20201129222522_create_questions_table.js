exports.up = function (knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments();
    table.integer('topic').unsigned();
    table.integer('asked_by').unsigned().references('id').inTable('users');
    table.integer('event_id').unsigned();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('questions');
};
