exports.up = function (knex) {
  return knex.schema.createTable('organizations', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('image_url').notNullable();
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('organizations');
};
