// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('group_table')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('group_table').insert([
        {
          id: 1,
          title: 'React',
          startDate: '2020-05-10 00:00:00',
          endDate: '2020-05-10 00:00:00',
          classid: 'class12',
        },
        {
          id: 2,
          title: 'MySql',
          startDate: '2020-05-07 00:00:00',
          endDate: '2020-05-08 00:00:00',
          classid: 'class14',
        },
      ]);
    });
};
