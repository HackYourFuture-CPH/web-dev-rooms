const knex = require('../../config/db');
const moment = require('moment-timezone');

function getNumberOfWeek(date) {
  const today = date;
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const getUserEventsByUID = async (userID) => {
  const today = moment().format('YYYY-MM-DD HH:mm:ss');
  /* 
SQL query to select .... all the future and ongoing events for a userId

select events.id, organizations.name,events.event_date 
from events 
join events_users 
	on events.id = events_users.event_id 
join users 
	on events_users.users_id = users.id
join organizations
	on users.organization_id = organizations.id
where users.id=4 and event_date>"2020-11-18 10:00:00"

SQL query to get role name for a userID

SELECT roles.name
FROM users 
join user_roles on users.id = user_roles.user_id 
join roles on user_roles.role_id = roles.id
where users.id=3;
  */
  try {
    const userEvents = await knex('events')
      .select(
        'events.id as eventID',
        'organizations.name as organization',
        'events.event_date as dateTime',
        'events.venue as link',
      )
      .join('events_users', 'events.id', 'events_users.event_id')
      .join('users', 'events_users.users_id', 'users.id')
      .join('organizations', 'users.organization_id', 'organizations.id')
      .where('users.id', userID)
      .where('event_date', '>', today);
    // userEvents has all the events for a user id
    // now check the role of the user
    /* 
    const userRole = await knex('users')
      .select('roles.name')
      .join('user_roles', 'users.id', 'user_roles.user_id')
      .join('roles', 'user_roles.role_id', 'roles.id')
      .where('users.id', 3); */

    /* modify userEvents as per our requirement
     1. Event Id
    2. Organization hosting the event/study group,
    3. Date of the event/study group
    4. Time of the event/study group,
    5. Week number */
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    // var dayName = days[d.getDay()];
    const formatedUserEvents = userEvents.map((userEvent) => ({
      eventID: userEvent.eventID,
      organization: userEvent.organization,
      date: `${userEvents[0].dateTime.getDate()}-${
        userEvents[0].dateTime.getMonth() + 1
      }-${userEvents[0].dateTime.getFullYear()}`,
      time: `${userEvents[0].dateTime.getHours()}:${userEvents[0].dateTime.getMinutes()}:${userEvents[0].dateTime.getSeconds()}`,
      weekNumber: `${getNumberOfWeek(userEvents[0].dateTime)}`,
      day: `${days[userEvents[0].dateTime.getDay()]}`,
      link: userEvent.link,
    }));

    if (userEvents.length === 0) return [];

    return formatedUserEvents;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  getUserEventsByUID,
};
