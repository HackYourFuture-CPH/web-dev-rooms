// migration for events table
exports.up = function (knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.enu('event_type', ['study_group', 'workshop', 'other']).notNullable();
    table.datetime('event_date').defaultTo(knex.fn.now()).notNullable();
    table.string('venue').notNullable();
    table.string('description').notNullable();
    table.integer('maxParticipants').notNullable().defaultTo(2);
    table
      .integer('created_by')
      .unsigned()
      .references('id')
      .inTable('users')
      .notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('events');
};
