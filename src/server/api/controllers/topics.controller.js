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
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  return knex('topics').where({ id: topicId }).update({
    topic_name: body.topicName,
    created_at: timestamp,
    updated_at: timestamp,
  });
};

const deleteTopic = async (topicId) => {
  try {
    const topics = await knex('topics')
      .select('topics.deleted_at as id', 'topics.topic_name as topicName')
      .where({ id: topicId })
      .andWhere({ deleted_at: null });
    if (topics.length === 0) {
      throw new Error(`Incorrect topic with the id ${topicId}`, 404);
    } else {
      return knex('topics')
        .where({ id: topicId })
        .update({
          deleted_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        });
    }
  } catch (error) {
    return error.message;
  }
};

const createTopic = async (body) => {
  await knex('topics').insert({
    topic_name: body.topicName,
    week_number: body.weekNumber,
    readme_url: body.readmeUrl,
    lesson_url: body.lessonUrl,
    homework_url: body.homeworkUrl,
    module_id: body.moduleId,
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
