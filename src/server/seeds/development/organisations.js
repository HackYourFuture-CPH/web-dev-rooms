exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('organizations')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('organizations').insert([{ id: 1, name: 'Elastic' }]);
    });
};
