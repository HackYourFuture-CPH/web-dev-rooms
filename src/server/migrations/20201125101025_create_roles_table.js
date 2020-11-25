exports.up = function(knex) {
  return knex.schema.createTable('roles', (table) => {
    table.integer('id').primary();
    table.string('name').notNullable();
    table
      .datetime('createdAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table
      .datetime('updatedAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.datetime('deletedAt');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles');
};
