exports.up = function (knex) {
  return knex.schema.createTable('events_users', (table) => {
    table.increments();
    table
      .integer('users_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable();
    table.string('status').notNullable();
    table.string('comment').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('events_users');
};
