exports.up = function (knex) {
  return knex.schema.createTable('user_roles', (table) => {
    table.increments();
    table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    table
      .integer('role_id')
      .unsigned()
      .references('id')
      .inTable('roles')
      .onDelete('cascade');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_roles');
};
