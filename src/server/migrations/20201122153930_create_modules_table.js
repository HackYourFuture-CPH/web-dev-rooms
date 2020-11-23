exports.up = function(knex) {
  return knex.schema.createTable('module', (table) => {
    table.increments();
    table.varchar('module_name').notNullable();
    table.datetime('created_at').notNullable();
    table.datetime('updated_at').notNullable();
    table.datetime('deleted_at').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('module');
};
