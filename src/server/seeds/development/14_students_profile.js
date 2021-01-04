exports.seed = function (knex) {
  return knex('students_profile')
    .del()
    .then(function () {
      return knex('students_profile').insert([
        {
          id: 1,
          name: 'Deepti',
          group_id: 1,
          group_name: 'class14',
          time_zone: '2020-01-01',
        },
        {
          id: 2,
          name: 'Jean',
          group_id: 2,
          group_name: 'class15',
          time_zone: '2020-03-01',
        },
        {
          id: 3,
          name: 'Nouha',
          group_id: 3,
          group_name: 'class16',
          time_zone: '2020-05-01',
        },
      ]);
    });
};
