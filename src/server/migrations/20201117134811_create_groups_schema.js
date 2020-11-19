exports.up = function (knex) {
  return knex.schema.createTable('class_groups', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('classId').notNullable();
    table.datetime('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updatedAt').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deletedAt');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('class_groups');
};
