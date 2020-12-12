const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');
const Error = require('../lib/utils/http-error');

const getUserById = async (id, role) => {
  try {
    const eventData = await knex.raw(
      ` SELECT ev.id AS eventId,  org.name AS organization,  ev.event_date AS eventDate,  ev.created_at AS eventTime,  WEEK(ev.created_at) as eventWeek  FROM  events_users AS eu, users AS us,  events_students AS es,  organizations AS org, events AS ev  WHERE  us.id = eu.users_id  AND es.student_id = eu.id  AND org.id = us.organization_id  AND ev.id = es.event_id  AND eu.users_id = ? `,
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
  let i;
  for (i = 0; i < eventData[0].length; i += 1) {
    outPutData[i] = eventData[0][i];
    outPutData[i].eventDate = getDate(outPutData[i].eventTime);
    outPutData[i].eventTime = String(outPutData[i].eventTime).substr(16, 8);
    outPutData[i].listOfAttendess = await getAttendees(
      role,
      outPutData[i].eventId,
    );
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
        ` SELECT  us.name  FROM  users us, events_students es, events_users eu,  events ev  WHERE  ev.id = es.event_id  AND es.student_id = eu.id  AND eu.users_id = us.id  AND ev.id = ? `,
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
        ` SELECT  us.name  FROM  users us,  events_mentors em,  events_users eu,  events ev  WHERE  ev.id = em.event_id  AND em.mentor_id = eu.id  AND eu.users_id = us.id  AND ev.id = ? `,
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
