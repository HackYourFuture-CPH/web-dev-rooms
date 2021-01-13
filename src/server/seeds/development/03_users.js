exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          group_id: 1,
          name: 'Deepti_class14 ',
          slack_id: 'deepti14',
          organization_id: 1,
        },
        {
          id: 2,
          group_id: 2,
          name: 'Stephen_class15',
          slack_id: 'stephen15 ',
          organization_id: 2,
        },
        {
          id: 3,
          group_id: 3,
          name: 'Jane_class16',
          slack_id: 'jane16',
          organization_id: 3,
        },
        {
          id: 4,
          group_id: 4,
          name: 'John_class17',
          slack_id: 'john17',
          organization_id: 1,
        },
        {
          id: 5,
          group_id: 1,
          name: 'Pallabi_class14',
          slack_id: 'pallabi14',
          organization_id: 1,
        },
        {
          id: 6,
          group_id: 2,
          name: 'Anil_class15',
          slack_id: 'anil15',
          organization_id: 2,
        },
        {
          id: 7,
          group_id: 3,
          name: 'Jean_class16',
          slack_id: 'jean16',
          organization_id: 3,
        },
        {
          id: 8,
          group_id: 4,
          name: 'Kiran_class17',
          slack_id: 'kiran17',
          organization_id: 1,
        },
        {
          id: 9,
          group_id: 1,
          name: 'Nouha_class14',
          slack_id: 'nouha14',
          organization_id: 1,
        },
        {
          id: 10,
          group_id: 1,
          name: 'Maher_class14',
          slack_id: 'Maher14',
          organization_id: 2,
        },
        {
          id: 101,
          name: 'mentor elastic1',
          slack_id: 'mentor_elastic1',
          organization_id: 2,
        },
        {
          id: 102,
          name: 'mentor zendesk',
          slack_id: 'mentor_zendesk',
          organization_id: 3,
        },
        {
          id: 1001,
          name: 'admin 1',
          slack_id: 'admin1',
          organization_id: 1,
        },
      ]);
    });
};
