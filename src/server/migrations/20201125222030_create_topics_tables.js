exports.up = function (knex) {
  return knex.schema.createTable('topics', (table) => {
    table.increments();
    table.string('topic_name').notNullable();
    table.integer('week_number').notNullable();
    table.string('readme_url').notNullable();
    table.string('lesson_url').notNullable();
    table.string('homework_url').notNullable();
    table.integer('module_id').unsigned().references('id').inTable('modules');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('topics');
};
