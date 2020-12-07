const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getTopics = async () => {
  try {
    return await knex('topics').select('topics.id', 'topics.topic_name');
  } catch (error) {
    return error.message;
  }
};

const getTopicById = async (id) => {
  try {
    const topics = await knex('topics')
      .select('topics.id as id', 'topic_name')
      .where({ id });
    if (topics.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return topics;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getTopics,
  getTopicById,
};
