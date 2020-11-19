// TODO: This is a sample seed file for demonstration. Remove before adding real ones.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('class_groups')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('class_groups').insert([
        {
          id: 1,
          title: 'Reba',
          classId: 'class 14',
        },
        {
          id: 2,
          title: 'Poli',
          classId: 'class 15',
        },
      ]);
    });
};
