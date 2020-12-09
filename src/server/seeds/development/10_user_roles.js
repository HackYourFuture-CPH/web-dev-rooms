exports.seed = function (knex) {
  return knex('user_roles')
    .del()
    .then(function () {
      return knex('user_roles').insert([
        {
          id: 1,
          user_id: 1,
          role_id: 1,
        },
        {
          id: 2,
          user_id: 2,
          role_id: 2,
        },
        {
          id: 3,
          user_id: 3,
          role_id: 2,
        },
        {
          id: 4,
          user_id: 4,
          role_id: 3,
        },
        {
          id: 5,
          user_id: 9,
          role_id: 1, // mentor
        },
      ]);
    });
};
