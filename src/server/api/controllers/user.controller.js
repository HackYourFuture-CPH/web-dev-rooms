const knex = require('../../config/db');
const Error = require('../lib/utils/http-error');

const getUserById = async (id, role) => {
  try {
    const eventUsers = await knex.raw(
      'SELECT ' +
        'ev.id AS eventId, ' +
        'org.name AS organization, ' +
        'ev.event_date AS eventDate, ' +
        'ev.created_at AS eventTime, ' +
        'WEEK(ev.created_at) as eventWeek ' +
        'FROM ' +
        'events_users AS eu, ' +
        'users AS us, ' +
        'events_students AS es, ' +
        'organizations AS org, ' +
        'events AS ev ' +
        'WHERE ' +
        'us.id = eu.users_id ' +
        'AND es.student_id = eu.id ' +
        'AND org.id = us.organization_id ' +
        'AND ev.id = es.event_id ' +
        'AND eu.users_id = ? ' +
        'limit 1;',
      [id],
    );
    if (eventUsers.length === 0) {
      return new Error(`No Entries with the id of ${id}`, 404);
    }
    const usableData = eventUsers[0][0];
    usableData.eventDate = getDate(usableData.eventTime);
    usableData.eventTime = String(usableData.eventTime).substr(16, 8);
    const attendeeList = await getAttendees(role, usableData.eventId);
    usableData.listOfAttendess = attendeeList;
    return usableData;
  } catch (error) {
    return error.message;
  }
};

async function getAttendees(role, eventId) {
  if (role !== 'mentors' && role !== 'students') {
    return new Error(`No Roles found with ${role}`, 404);
  }
  try {
    if (role === 'mentors') {
      const studentNames = await knex.raw(
        'SELECT ' +
          'us.name ' +
          'FROM ' +
          'users us, ' +
          'events_students es, ' +
          'events_users eu, ' +
          'events ev ' +
          'WHERE ' +
          'ev.id = es.event_id ' +
          'AND es.student_id = eu.id ' +
          'AND eu.users_id = us.id ' +
          'AND ev.id = ? ',
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
        'SELECT ' +
          'us.name ' +
          'FROM ' +
          'users us, ' +
          'events_mentors em, ' +
          'events_users eu, ' +
          'events ev ' +
          'WHERE ' +
          'ev.id = em.event_id ' +
          'AND em.mentor_id = eu.id ' +
          'AND eu.users_id = us.id ' +
          'AND ev.id = ? ',
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
  const demo = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
  return demo;
}

module.exports = {
  getUserById,
};
