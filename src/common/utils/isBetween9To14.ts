import moment from 'moment';

export const isBetween9To14 = (currentTime: moment.Moment): boolean => {
  const currentHour = currentTime.hours();
  return currentHour >= 9 && currentHour < 14;
}

