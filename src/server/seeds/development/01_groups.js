exports.seed = function (knex) {
  return knex('groups')
    .del()
    .then(function () {
      return knex('groups').insert([
        {
          id: 1,
          name: 'group1',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 2,
          name: 'group2',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 3,
          name: 'group3',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 4,
          name: 'group4',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 5,
          name: 'group5',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 6,
          name: 'group6',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 7,
          name: 'group7',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 8,
          name: 'group8',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 9,
          name: 'group9',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 10,
          name: 'group10',
          deleted_at: '2020-11-18 16:00',
        },
      ]);
    });
};
