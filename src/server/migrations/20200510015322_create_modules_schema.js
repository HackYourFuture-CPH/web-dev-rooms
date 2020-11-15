// TODO: This is a sample migration for demonstration. Remove before adding real ones.

exports.up = function(knex) {
  return knex.schema.createTable('Topics', (table) => {
    table.increments();
    table.string('title').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Topics');
};
