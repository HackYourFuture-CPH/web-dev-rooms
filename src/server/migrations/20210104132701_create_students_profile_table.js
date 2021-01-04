exports.up = function (knex) {
  return knex.schema.createTable('students_profile', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('group_id');
    table.string('group_name');
    table.datetime('time_zone');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('students_profile');
};
