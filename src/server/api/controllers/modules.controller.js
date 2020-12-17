/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');
const moment = require('moment-timezone');

const getModules = async () => {
  try {
    return await knex('modules').select(
      'modules.id',
      'modules.module_name as name',
    );
  } catch (error) {
    return error.message;
  }
};

const getModuleById = async (id) => {
  try {
    const modules = await knex('modules')
      .select('modules.id as id', 'modules.module_name as name')
      .where({ id });
    if (modules.length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    return modules;
  } catch (error) {
    return error.message;
  }
};

const editModule = async (moduleId, body) => {
  return knex('modules')
    .where({ id: moduleId })
    .update({
      module_name: body.moduleName,
      created_at: moment(body.created_at).format(),
      updated_at: moment(body.updated_at).format(),
    });
};

const deleteModule = async (modulesId) => {
  return knex('modules').where({ id: modulesId }).del();
};

const createModule = async (body) => {
  await knex('modules').insert({
    module_name: body.moduleName,
    created_at: moment(body.created_at).format(),
    updated_at: moment(body.updated_at).format(),
  });

  return {
    successful: true,
  };
};

module.exports = {
  getModules,
  getModuleById,
  deleteModule,
  createModule,
  editModule,
};
