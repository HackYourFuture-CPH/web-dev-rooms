exports.seed = function (knex) {
  return knex('organizations')
    .del()
    .then(function () {
      return knex('organizations').insert([
        {
          id: 1,
          name: 'HYF',
          image_url: 'https://www.hackyourfuture.dk/',
        },
        {
          id: 2,
          name: 'Elastic ',
          image_url: 'https://www.elastic.co/',
        },
        {
          id: 3,
          name: 'Zendesk',
          image_url: 'https://www.zendesk.com/',
        },
      ]);
    });
};
