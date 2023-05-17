const DATE_FORMAT = 'MMM DD'; /*Вывод просто ДАТЫ в точке OCT 11*/
const DATE_TIME_FORMAT = 'YY-MM-DD'; /* Для подстановки в <time datetime=""> точки 2019-03-18 */
const TIME_FORMAT = 'HH:mm'; /*Для времени в точке*/
const FILTER_DAY_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_EDIT_FORMAT = 'DD/MM/YY';

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};

export { DATE_FORMAT, DATE_TIME_FORMAT, DATE_TIME_EDIT_FORMAT, FilterType, FILTER_DAY_FORMAT, TIME_FORMAT };

