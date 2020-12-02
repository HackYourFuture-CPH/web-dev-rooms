// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('modules')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([]);
    });
};
