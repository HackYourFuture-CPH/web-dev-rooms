exports.seed = function (knex) {
  return knex('mentors_skills')
    .del()
    .then(function () {
      return knex('mentors_skills').insert([
        {
          skill_id: 1,
        },
        {
          skill_id: 2,
        },
        {
          skill_id: 3,
        },
        {
          skill_id: 4,
        },
        {
          skill_id: 5,
        },
      ]);
    });
};
