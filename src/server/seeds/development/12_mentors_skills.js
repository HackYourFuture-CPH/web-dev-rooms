exports.seed = function (knex) {
  return knex('mentors_skills')
    .del()
    .then(function () {
      return knex('mentors_skills').insert([
        {
          id: 1,
          skill_id: 1,
          mentor_id: 2,
        },
        {
          id: 3,
          skill_id: 2,
          mentor_id: 2,
        },
        {
          id: 3,
          skill_id: 3,
          mentor_id: 3,
        },
        {
          id: 4,
          skill_id: 4,
          mentor_id: 3,
        },
        {
          id: 5,
          skill_id: 5,
          mentor_id: 1,
        },
        {
          id: 6,
          skill_id: 4,
          mentor_id: 1,
        },
        {
          id: 7,
          skill_id: 2,
          mentor_id: 1,
        },
      ]);
    });
};
