import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(duration);
dayjs.extend(isBetween);


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
  console.log(differentTime.$d)
  switch (true) {
    case (days > 0):
      return differentTime.format('DD[D] HH[H] mm[M]');
    case (hours > 0):
      return differentTime.format('HH[H] mm[M]');
    case (minutes < 60):
      return differentTime.format('mm[M]');
  }
};


export {humanizeDate, calculateDiffTime};
