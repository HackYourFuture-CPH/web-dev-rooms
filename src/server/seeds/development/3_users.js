exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          // mentor
          id: 1,
          group_id: 1,
          name: 'user1',
          slack_id: 'u1',
          organization_id: 1,
          deleted_at: '2020-11-18 16:00',
        },
        {
          // student
          id: 2,
          group_id: 2,
          name: 'user2',
          slack_id: 'u2',
          organization_id: 2,
          deleted_at: '2020-11-18 16:00',
        },
        {
          // student
          id: 3,
          group_id: 3,
          name: 'user3',
          slack_id: 'u3',
          organization_id: 3,
          deleted_at: '2020-11-18 16:00',
        },
        {
          // stuff
          id: 4,
          group_id: 4,
          name: 'user4',
          slack_id: 'u4',
          organization_id: 1,
          deleted_at: '2020-11-18 16:00',
        },
        {
          // mentor
          id: 5,
          group_id: 5,
          name: 'user5',
          slack_id: 'u5',
          organization_id: 2,
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 6,
          group_id: 6,
          name: 'user6',
          slack_id: 'u6',
          organization_id: 1,
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 7,
          group_id: 10,
          name: 'user7',
          slack_id: 'u7',
          organization_id: 2,
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 8,
          group_id: 8,
          name: 'user8',
          slack_id: 'u8',
          organization_id: 3,
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 9,
          group_id: 9,
          name: 'user9',
          slack_id: 'u9',
          organization_id: 5,
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 10,
          group_id: 9,
          name: 'user10',
          slack_id: 'u10',
          organization_id: 2,
          deleted_at: '2020-11-18 16:00',
        },
      ]);
    });
};
