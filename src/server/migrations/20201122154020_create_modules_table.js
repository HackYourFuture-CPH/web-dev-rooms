exports.up = function (knex) {
  return knex.schema.createTable('modules', (table) => {
    table.increments();
    table.varchar('module_name').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('modules');
};
