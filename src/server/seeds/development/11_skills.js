exports.seed = function (knex) {
  return knex('skills')
    .del()
    .then(function () {
      return knex('skills').insert([
        {
          id: 1,
          name: 'HTML/CSS',
        },
        {
          id: 2,
          name: 'JavaScript',
        },
        {
          id: 3,
          name: 'NodeJS',
        },
        {
          id: 4,
          name: 'MySQL ',
        },
        {
          id: 5,
          name: 'React',
        },
      ]);
    });
};
