exports.up = function(knex) {
  return knex.schema.createTable('user_roles', (table) => {
    table.increments();
    table
      .integer('user_id')
      .references('id')
      .inTable('users');
    table
      .integer('role_id')
      .references('id')
      .inTable('roles');
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
  return knex.schema.dropTable('user_roles');
};
