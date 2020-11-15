// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Topics')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Topics').insert([
        {
          id: 1,
          title: 'HTML/CSS',
        },
        {
          id: 2,
          title: 'Javascript 1',
        },
        {
          id: 3,
          title: 'Javascript 2',
        },
        {
          id: 4,
          title: 'Javascript 3',
        },
        {
          id: 5,
          title: 'Databases',
        },
        {
          id: 6,
          title: 'Node.js',
        },
        {
          id: 7,
          title: 'React',
        },
        {
          id: 8,
          title: 'Final project',
        },
      ]);
    });
};
