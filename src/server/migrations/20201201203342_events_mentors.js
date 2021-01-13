exports.up = function (knex) {
  return knex.schema.createTable('events_mentors', (table) => {
    table.increments();
    table
      .integer('event_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('events');
    table
      .integer('mentor_id')
      .unsigned()
      .references('id')
      .inTable('events_users');
    table.boolean('status').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('events_mentors');
};
