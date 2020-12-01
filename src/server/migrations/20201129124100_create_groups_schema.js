exports.up = function (knex) {
  return knex.schema.createTable('groups', (table) => {
    table.increments();
    table.string('name').notNullable();
    table
      .integer('user_id')
      .unsigned()
      .notNull()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('groups');
};
