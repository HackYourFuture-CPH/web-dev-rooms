exports.up = function (knex) {
  return knex.schema.table('users', function (t) {
    t.integer('group_id')
      .unsigned()
      .notNull()
      .references('id')
      .inTable('groups')
      .onDelete('cascade');
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (t) {
    t.dropColumn('group_id');
  });
};
