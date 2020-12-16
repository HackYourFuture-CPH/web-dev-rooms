exports.seed = function (knex) {
  return knex('groups')
    .del()
    .then(function () {
      return knex('groups').insert([
        {
          id: 1,
          name: 'class14',
        },
        {
          id: 2,
          name: 'class15 ',
        },
        {
          id: 3,
          name: 'class16',
        },
        {
          id: 4,
          name: 'class17',
        },
      ]);
    });
};
