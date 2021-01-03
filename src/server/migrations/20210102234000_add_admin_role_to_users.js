exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.text('admin_role').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('admin_role');
  });
};
