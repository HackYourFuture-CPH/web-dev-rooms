exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.text('slack_access_token');
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('slack_access_token');
  });
};
