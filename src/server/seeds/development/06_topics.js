exports.seed = function (knex) {
  return knex('topics')
    .del()
    .then(function () {
      return knex('topics').insert([
        {
          id: 1,
          topic_name: 'HTML tags ',
          week_number: 1,
          readme_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/readme.md',
          lesson_url: 'https://github.com/HackYourFuture-CPH/curriculum',
          homework_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/homework.md',
          module_id: 1,
        },
        {
          id: 2,
          topic_name: 'Git branches',
          week_number: 10,
          readme_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/readme.md',
          lesson_url: 'https://github.com/HackYourFuture-CPH/curriculum',
          homework_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/homework.md',
          module_id: 3,
        },
        {
          id: 3,
          topic_name: 'Javascript1',
          week_number: 10,
          readme_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/readme.md',
          lesson_url: 'https://github.com/HackYourFuture-CPH/curriculum',
          homework_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/homework.md',
          module_id: 2,
        },
        {
          id: 4,
          topic_name: 'Javascript3',
          week_number: 7,
          readme_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/readme.md',
          lesson_url: 'https://github.com/HackYourFuture-CPH/curriculum',
          homework_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/homework.md',
          module_id: 2,
        },
        {
          id: 5,
          topic_name: 'Javascript1',
          week_number: 14,
          readme_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/readme.md',
          lesson_url: 'https://github.com/HackYourFuture-CPH/curriculum',
          homework_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/homework.md',
          module_id: 2,
        },
        {
          id: 6,
          topic_name: 'React',
          week_number: 24,
          readme_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/readme.md',
          lesson_url: 'https://github.com/HackYourFuture-CPH/curriculum',
          homework_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/homework.md',
          module_id: 6,
        },
        {
          id: 7,
          topic_name: 'React',
          week_number: 20,
          readme_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/readme.md',
          lesson_url: 'https://github.com/HackYourFuture-CPH/curriculum',
          homework_url:
            'https://github.com/HackYourFuture-CPH/HTML-CSS/blob/master/Week2/homework.md',
          module_id: 6,
        },
      ]);
    });
};
