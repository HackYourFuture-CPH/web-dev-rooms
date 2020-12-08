exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name');
    table.string('slack_id').notNullable();
    table
      .integer('organization_id')
      .unsigned()
      .references('id')
      .inTable('organizations');
    table.datetime('created_At').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
