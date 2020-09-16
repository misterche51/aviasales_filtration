const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

const hoursOfFlight = minutes => Math.floor(minutes / 60);
const minsUpperHourOfFlight = minutes => minutes % 60;

const getHoursFromDate = date => date.getHours() + 1;
const getMinutesFromDate = date => date.getMinutes();
const getHoursOf24 = hours => hours - HOURS_IN_DAY >= 0 ? hours - HOURS_IN_DAY : hours;

const getTimeOfFinish = (startHours, startMinutes, duration) => {
  const finishHours = startHours + hoursOfFlight(duration);
  const finishMins = startMinutes + minsUpperHourOfFlight(duration);

  return finishMins - MINUTES_IN_HOUR >= 0 ? {
    hoursOfFinish: getHoursOf24(finishHours + 1),
    minsOfFinish: finishMins - MINUTES_IN_HOUR
  } : {
      hoursOfFinish: getHoursOf24(finishHours),
      minsOfFinish: finishMins
    }
};
const formattingTimeTo00 = (value) => value.toString().length > 1 ? value : `0${value}`;

const getConvertedDuration = (minutes) => `${hoursOfFlight(minutes)}ч ${minsUpperHourOfFlight(minutes)}м`;


const getFormattedTime = (directionObject) => {
  const { date, duration } = directionObject;
  const dateObj = new Date(date);
  const hoursOfStart = getHoursFromDate(dateObj);
  const minsOfStart = getMinutesFromDate(dateObj);
  const { hoursOfFinish, minsOfFinish } = getTimeOfFinish(hoursOfStart, minsOfStart, duration);

  return `${formattingTimeTo00(hoursOfStart)}:${formattingTimeTo00(minsOfStart)} - ${formattingTimeTo00(getHoursOf24(hoursOfFinish))}:${formattingTimeTo00(minsOfFinish)}`
}


const generateStopsTitle = (array) => {
  const length = array.length;
  if (length === 0) return "Пересадки";
  if (length === 1) return "1 пересадка";
  if ([2, 3, 4].includes(length)) return `${length} пересадки`;
  else return `${length} пересадки`;
};

const generateStopsList = (array) => array.length > 0 ? array.join(', '): "Прямой";


const getFormattedPrice = (price) => {
  const string = price.toString();
  return string.slice(0, -3) + ' ' + string.slice(-3) + ' ₽';
}


export {getConvertedDuration, getFormattedTime, generateStopsTitle, generateStopsList, getFormattedPrice};