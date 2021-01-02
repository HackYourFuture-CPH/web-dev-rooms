const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getUserById = async (id, role) => {
  try {
    const eventData = await knex.raw(
      ` SELECT ev.id AS eventId, org.name AS organization, ev.event_date AS eventDate,  WEEK(ev.created_at) AS eventWeek FROM events_users AS eu, users AS us, user_roles AS ur, roles AS rl, organizations AS org, events AS ev WHERE us.id = eu.users_id AND ur.user_id = us.id AND rl.id = ur.role_id AND rl.name = 'student' AND org.id = us.organization_id AND ev.id = eu.event_id AND eu.users_id = ? `,
      [id],
    );
    if (eventData[0].length === 0) {
      throw new Error(`incorrect entry with the id of ${id}`, 404);
    }
    const dataToBeFetched = await transformData(eventData, role);
    return dataToBeFetched;
  } catch (error) {
    return error.message;
  }
};

async function transformData(eventData, role) {
  const outPutData = [];
  const listOfAttendes = [];
  let i;
  for (i = 0; i < eventData[0].length; i += 1) {
    outPutData[i] = eventData[0][i];
    const eventDateTime = outPutData[i].eventDate;
    outPutData[i].eventDate = getDate(eventDateTime);
    outPutData[i].eventTime = String(eventDateTime).substr(16, 8);
    listOfAttendes.push(getAttendees(role, outPutData[i].eventId));
  }
  const finalListOfAttendes = await Promise.all(listOfAttendes);
  let j;
  for (j = 0; j < outPutData.length; j += 1) {
    if (finalListOfAttendes.length >= j) {
      outPutData[j].listOfAttendes = finalListOfAttendes[j];
    } else {
      break;
    }
  }
  return outPutData;
}

async function getAttendees(role, eventId) {
  if (role !== 'mentors' && role !== 'students') {
    return new Error(`No Roles found with ${role}`, 404);
  }
  try {
    if (role === 'mentors') {
      const studentNames = await knex.raw(
        ` SELECT us.name FROM users as us, events_users as eu, events as ev, user_roles AS ur, roles AS rl WHERE ev.id = eu.event_id AND eu.users_id = us.id AND us.id = ur.user_id AND ur.role_id = rl.id AND rl.name = 'student' AND ev.id = ? `,
        [eventId],
      );
      if (studentNames.length > 0) {
        let i;
        const studentListFromDb = studentNames[0];
        const students = new Array(studentListFromDb.length);
        for (i = 0; i < studentListFromDb.length; i += 1) {
          students[i] = studentListFromDb[i].name;
        }
        return students;
      }
    } else {
      const mentorNames = await knex.raw(
        ` SELECT us.name FROM users as us, events_users as eu, events as ev, user_roles AS ur, roles AS rl WHERE ev.id = eu.event_id AND eu.users_id = us.id AND us.id = ur.user_id AND ur.role_id = rl.id AND rl.name = 'mentor' AND ev.id = ? `,
        [eventId],
      );
      if (mentorNames.length > 0) {
        let i;
        const mentorListFromDb = mentorNames[0];
        const mentors = new Array(mentorListFromDb.length);
        for (i = 0; i < mentorListFromDb.length; i += 1) {
          mentors[i] = mentorListFromDb[i].name;
        }
        return mentors;
      }
      if (mentorNames.length > 0) {
        return mentorNames[0];
      }
    }
  } catch (error) {
    return error.message;
  }
}

function getDate(time) {
  const date = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`;
  return date;
}

const createStudentRegistration = async (body, authUser) => {
  const organizationName = 'HYF';
  const org = await knex('organizations')
    .where('name', organizationName)
    .first('id');

  const organizationId = org.id;

  const registerStudentId = await knex('users').insert({
    name: body.name,
    organization_id: organizationId,
    group_id: body.groupId,
    slack_id: authUser.slackId,
    slack_access_token: authUser.accessToken,
  });

  const studentRole = await knex('roles').where('name', 'student').first('id');

  if (studentRole && registerStudentId) {
    const insertedUserRoleId = await knex('user_roles').insert({
      user_id: registerStudentId,
      role_id: studentRole.id,
    });

    if (insertedUserRoleId) {
      return { successful: true };
    }
  }

  return { successful: false };
};

module.exports = {
  getUserById,
  createStudentRegistration,
};
