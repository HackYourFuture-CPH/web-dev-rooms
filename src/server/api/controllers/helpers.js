const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function formatDate(date) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

function formatTime(dateTime) {
  const minutes =
    dateTime.getMinutes() < 10
      ? `0${dateTime.getMinutes()}`
      : dateTime.getMinutes();

  return `${dateTime.getHours()}:${minutes}`;
}

/**
 * Returns the English name for the specified date's day.
 *
 * @param {Date} date
 * @returns
 */
function getDayOfWeek(date) {
  return days[date.getDay()];
}

function getWeekNumber(date) {
  const today = date;
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

module.exports = {
  formatDate,
  formatTime,
  getDayOfWeek,
  getWeekNumber,
};
