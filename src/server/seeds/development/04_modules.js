exports.seed = function (knex) {
  return knex('modules')
    .del()
    .then(function () {
      return knex('modules').insert([
        {
          id: 1,
          module_name: 'HTML/CSS',
        },
        {
          id: 2,
          module_name: 'Javascript ',
        },
        {
          id: 3,
          module_name: 'Git',
        },
        {
          id: 4,
          module_name: 'Nodejs',
        },
        {
          id: 5,
          module_name: 'Databases',
        },
        {
          id: 6,
          module_name: 'React',
        },
      ]);
    });
};
