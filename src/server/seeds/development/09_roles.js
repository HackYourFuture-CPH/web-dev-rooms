exports.seed = function (knex) {
  return knex('roles')
    .del()
    .then(function () {
      return knex('roles').insert([
        {
          id: 1,
          name: 'mentor',
        },
        {
          id: 2,
          name: 'student',
        },
        {
          id: 3,
          name: 'admin',
        },
      ]);
    });
};
