const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getTopics = async () => {
  try {
    return await knex('topics').select(
      'topics.id as id',
      'topics.topic_name as topicName',
    );
  } catch (error) {
    return error.message;
  }
};

const getTopicById = async (id) => {
  try {
    const topics = await knex('topics')
      .select('topics.id as id', 'topics.topic_name as topicName')
      .where({ id });
    if (topics.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return topics;
  } catch (error) {
    return error.message;
  }
};

const editTopic = async (topicId, body) => {
  return knex('topics')
    .where({ id: topicId })
    .update({
      topic_name: body.topicName,
      created_at: moment(body.created_at).format(),
      updated_at: moment(body.updated_at).format(),
    });
};

const deleteTopic = async (topicId) => {
  return knex('topics').where({ id: topicId }).del();
};

const createTopic = async (body) => {
  await knex('topics').insert({
    topic_name: body.topicName,
    week_number: body.weekNumber,
    readme_url: body.readmeUrl,
    lesson_url: body.lessonUrl,
    homework_url: body.homeworkUrl,
    module_id: body.moduleId,
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
  });

  return {
    successful: true,
  };
};

module.exports = {
  getTopics,
  getTopicById,
  editTopic,
  deleteTopic,
  createTopic,
};
