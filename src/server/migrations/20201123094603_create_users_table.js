exports.up = function(knex) {
  return knex.schema
    .createTable('organization', (table) => {
      table.integer('id').primary();
      table.string('name').notNullable();
      table.string('image_url').notNullable();
      table
        .datetime('createdAt')
        .defaultTo(knex.fn.now())
        .notNullable();
      table
        .datetime('updatedAt')
        .defaultTo(knex.fn.now())
        .notNullable();
      table.datetime('deletedAt');
    })
    .createTable('users', (table) => {
      table.integer('id').primary();
      table.string('title').notNullable();
      table.string('slack_id').notNullable();
      table
        .integer('organization_id')
        .references('id')
        .inTable('organization');
      table
        .datetime('createdAt')
        .defaultTo(knex.fn.now())
        .notNullable();
      table
        .datetime('updatedAt')
        .defaultTo(knex.fn.now())
        .notNullable();
      table.datetime('deletedAt');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users').dropTable('organization');
};
