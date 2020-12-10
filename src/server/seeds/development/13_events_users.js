exports.seed = function (knex) {
  return knex('events_users')
    .del()
    .then(function () {
      return knex('events_users').insert([
        {
          id: 1,
          users_id: 1,
          status: 'done',
          comment: 'this is comment in from user 1',
        },
        {
          id: 2,
          users_id: 2,
          status: 'everyone',
          comment: 'this is comment in from user 2 ',
        },
        {
          id: 3,
          users_id: 3,
          status: 'done',
          comment: 'this is comment in from user 3 ',
        },
        {
          id: 4,
          users_id: 5,
          status: 'done',
          comment: 'this is comment in from user 4',
        },
        {
          id: 5,
          users_id: 4,
          status: 'done',
          comment: 'this is comment in from user 5',
        },
        {
          id: 6,
          users_id: 6,
          status: 'done',
          comment: 'this is comment in from user 6',
        },
      ]);
    });
};
