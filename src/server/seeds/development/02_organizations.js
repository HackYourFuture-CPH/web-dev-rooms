exports.seed = function (knex) {
  return knex('organizations')
    .del()
    .then(function () {
      return knex('organizations').insert([
        {
          id: 1,
          name: 'org1',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 2,
          name: 'org2',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 3,
          name: 'org3',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 4,
          name: 'org4',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 5,
          name: 'org5',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 6,
          name: 'org6',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 7,
          name: 'org7',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 8,
          name: 'org8',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 9,
          name: 'org9',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
        {
          id: 10,
          name: 'org10',
          image_url: 'https://www.hackyourfuture.dk/static/logo-dark.svg',
          deleted_at: '2020-11-18 16:00',
        },
      ]);
    });
};
