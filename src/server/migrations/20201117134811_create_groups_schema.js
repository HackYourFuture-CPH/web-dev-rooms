exports.up = function (knex) {
  return knex.schema.createTable('group_table', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.datetime('startDate').notNullable();
    table.datetime('endDate').notNullable();
    table.string('classId').notNullable();
    table.datetime('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updatedAt').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deletedAt');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('group_table');
};
