exports.up = function (knex) {
  return knex.schema.table('events_users', function (table) {
    table
      .integer('event_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('events');
  });
};

exports.down = function (knex) {
  return knex.schema.table('events_users', function (table) {
    table.dropForeign('event_id');
    table.dropColumn('event_id');
  });
};
