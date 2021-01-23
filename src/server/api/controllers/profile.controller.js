/* eslint-disable no-unused-vars */
const knex = require('../../config/db');
const moment = require('moment-timezone');

const getStudentsProfile = async (userId) => {
  try {
    const profile = await knex('users')
      .select(
        'users.name',
        'users.group_id as groupId',
        'groups.name as groupName',
        'users.timezone',
      )
      .leftJoin('groups', 'group_id', 'groups.id')
      .where('users.id', userId);
    return profile[0];
  } catch (error) {
    return error.message;
  }
};

const editStudentProfile = async (body, userId) => {
  try {
    const studentData = await knex('users')
      .select('users.name', 'users.timezone')
      .leftJoin('user_roles', 'users.id', 'user_roles.user_id')
      .leftJoin('roles', 'user_roles.role_id', 'roles.id')
      .where('roles.name', 'student')
      .where({ 'users.id': userId });
    if (studentData.length === 0) {
      throw new Error(`incorrect entry with the id of ${userId}`, 404);
    } else {
      await knex('users').where({ id: userId }).update({
        name: body.name,
        timezone: body.timezone,
      });
    }
  } catch (error) {
    return error.message;
  }
};

const getAdminsProfile = async (userId) => {
  /* SQL query to get all the admins
  SELECT users.name, roles.name
  FROM users
  join user_roles on users.id = user_roles.user_id
  join roles on user_roles.role_id = roles.id
  where roles.name= "admin";
  */
  try {
    const profiles = await knex('users')
      .select('users.name', 'users.admin_role as adminRole')
      .join('user_roles', 'users.id', 'user_roles.user_id')
      .join('roles', 'user_roles.role_id', 'roles.id')
      .where('users.id', userId)
      .where('roles.name', 'admin');
    return profiles[0];
  } catch (error) {
    return error.message;
  }
};

const postAdminsProfile = async (adminRole, userId) => {
  try {
    const userProfileData = await knex('users')
      .select('users.id')
      .join('user_roles', 'users.id', 'user_roles.user_id')
      .join('roles', 'user_roles.role_id', 'roles.id')
      .where('users.id', userId)
      .where('roles.name', 'admin');
    if (userProfileData.length === 0) {
      throw new Error(`incorrect entry with the id of ${userId}`, 404);
    } else {
      await knex('users').where({ id: userId }).update({
        name: adminRole.name,
      });

      await knex('users').where({ id: userId }).update({
        admin_role: adminRole.role,
      });
    }
  } catch (error) {
    return error.message;
  }
};

const editMentorProfile = async (mentorId, updatedMentor) => {
  // validate that user exists and return 404 if it doesn't
  const getUser = await knex('users').select('id').where('id', mentorId);
  if (getUser[0].id !== mentorId) return 404;

  // validate that name is not an empty string and return 400 if it is
  if (!updatedMentor.name) return 400;

  // validate that the user is a student and return 404 if it isn't.
  const userRole = await knex('users')
    .select('roles.name')
    .join('user_roles', 'users.id', 'user_roles.user_id')
    .join('roles', 'user_roles.role_id', 'roles.id')
    .where('users.id', mentorId)
    .then((data) => JSON.parse(JSON.stringify(data)));
  if (userRole[0].name !== 'student') return 404;

  // delete existing skills of mentor from mentors_skills table
  const statusOnDeleteSkills = await knex('mentors_skills')
    .where('mentors_skills.mentor_id', mentorId)
    .del();

  // add new skills from the request
  const skillsArray = updatedMentor.skills.map(Number); // converts string array to number array
  const today = moment().format('YYYY-MM-DD HH:mm:ss');
  let statusOnAddSkill;
  skillsArray.map(async (skill) => {
    statusOnAddSkill = await knex('mentors_skills')
      .insert({
        skill_id: skill,
        mentor_id: mentorId,
        created_at: today,
        updated_at: today,
      })
      .then((data) => JSON.stringify(data));
    // knex.insert() returns 'id of inserted record as an object' on success
    // returns 'undefined' on failure
  });

  // update name and timezone
  const statusOnUpdateName = await knex('users')
    .update({
      name: updatedMentor.name,
      timezone: updatedMentor.timezone,
    })
    .where('users.id', mentorId);

  if (
    statusOnAddSkill !== undefined &&
    statusOnDeleteSkills > 0 &&
    statusOnUpdateName > 0
  )
    return 1;
};
module.exports = {
  getStudentsProfile,
  editStudentProfile,
  getAdminsProfile,
  postAdminsProfile,
  editMentorProfile,
};
