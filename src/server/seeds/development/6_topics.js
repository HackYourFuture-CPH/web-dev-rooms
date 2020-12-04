exports.seed = function (knex) {
  return knex('topics')
    .del()
    .then(function () {
      return knex('topics').insert([
        {
          id: 1,
          topic_name: 'topic1',
          week_number: 1,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 1,
        },
        {
          id: 2,
          topic_name: 'topic2',
          week_number: 10,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 3,
        },
        {
          id: 3,
          topic_name: 'topic3',
          week_number: 7,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 3,
        },
        {
          id: 4,
          topic_name: 'topic4',
          week_number: 14,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 2,
        },
        {
          id: 5,
          topic_name: 'topic5',
          week_number: 24,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 2,
        },
        {
          id: 6,
          topic_name: 'topic6',
          week_number: 20,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 5,
        },
        {
          id: 7,
          topic_name: 'topic7',
          week_number: 44,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 9,
        },
        {
          id: 8,
          topic_name: 'topic8',
          week_number: 4,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 9,
        },
        {
          id: 9,
          topic_name: 'topic9',
          week_number: 7,
          readme_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 7,
        },
        {
          id: 10,
          topic_name: 'topic10',
          week_number: 30,
          readme_url:
            ' https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          lesson_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          homework_url:
            'https://stackoverflow.com/questions/41959299/my-sql-alter-table-using-knex-js',
          module_id: 2,
        },
      ]);
    });
};
