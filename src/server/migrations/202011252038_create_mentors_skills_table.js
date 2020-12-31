exports.up = function (knex) {
  return knex.schema.createTable('mentors_skills', (table) => {
    table.increments();
    table
      .integer('skill_id')
      .unsigned()
      .notNull()
      .references('id')
      .inTable('skills')
      .onDelete('cascade');
    table.integer('mentor_id');
    table.datetime('created_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.datetime('deleted_at');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('mentors_skills');
};
