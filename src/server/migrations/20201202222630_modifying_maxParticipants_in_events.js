exports.up = function (knex) {
  return knex.schema.table('events', function (t) {
    t.renameColumn('maxParticipants', 'max_participants');
  });
};

exports.down = function (knex) {
  return knex.schema.table('events', function (t) {
    t.renameColumn('max_participants', 'maxParticipants');
  });
};
