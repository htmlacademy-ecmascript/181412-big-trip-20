import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import {FILTER_DAY_FORMAT} from '../const.js';

//import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(duration);
//dayjs.extend(isBetween);

/* Функция для форматирования даты */
function humanizeDate(date,dateFormat) {
  return date ? dayjs(date).format(dateFormat) : '';
}

/* Функция для расчета разницы */
const calculateDiffTime = (dateStart, dateEnd) => {
  const start = dayjs(dateStart);
  const end = dayjs(dateEnd);

  const differentTime = dayjs.duration(end.diff(start));
  const {days, hours, minutes} = differentTime.$d;
  switch (true) {
    case (days > 0):
      return differentTime.format('DD[D] HH[H] mm[M]');
    case (hours > 0):
      return differentTime.format('HH[H] mm[M]');
    case (minutes < 60):
      return differentTime.format('mm[M]');
  }
};

const isFuturePoint = (dateStart) => {
  const formatDateStart = humanizeDate(dateStart, FILTER_DAY_FORMAT);
  //console.log('дата Начала Больше?', formatDateStart)
  //console.log('текущей даты', '2023-05-14')
  return dayjs().isBefore(dayjs(formatDateStart));
};

const isPastPoint = (dateEnd) => {
  const formatDateEnd = humanizeDate(dateEnd, FILTER_DAY_FORMAT);
  //console.log('дата Окончания меньше?', formatDateEnd)
  //console.log('текущей даты', '2023-05-14')
  return dayjs().isAfter(dayjs(formatDateEnd));
};

const isPresentPoint = (dateStart, dateEnd) => {
  const formatDateStart = humanizeDate(dateStart, FILTER_DAY_FORMAT);
  const formatDateEnd = humanizeDate(dateEnd, FILTER_DAY_FORMAT);

  //console.log('текущая дата', '2023-05-14')
  //console.log(formatDateStart, 'дата больше текущей?', dayjs().isBefore(dayjs(formatDateStart)))
  //console.log(formatDateEnd, 'дата меньше текущей?', dayjs().isAfter(dayjs(formatDateEnd)))
  //console.log('В ПРЕДЕЛАХ?', formatDateStart, '-', formatDateEnd)

  return dayjs().isAfter(dayjs(formatDateStart)) && dayjs().isBefore(dayjs(formatDateEnd));
};


export {humanizeDate, calculateDiffTime, isFuturePoint, isPastPoint, isPresentPoint};
