exports.seed = function (knex) {
  return knex('modules')
    .del()
    .then(function () {
      return knex('modules').insert([
        {
          id: 1,
          module_name: 'module1',
        },
        {
          id: 2,
          module_name: 'module2',
        },
        {
          id: 3,
          module_name: 'module3',
        },
        {
          id: 4,
          module_name: 'module4',
        },
        {
          id: 5,
          module_name: 'module5',
        },
        {
          id: 6,
          module_name: 'module6',
        },
        {
          id: 7,
          module_name: 'module7',
        },
        {
          id: 8,
          module_name: 'module8',
        },
        {
          id: 9,
          module_name: 'module9',
        },
        {
          id: 10,
          module_name: 'module10',
        },
      ]);
    });
};
