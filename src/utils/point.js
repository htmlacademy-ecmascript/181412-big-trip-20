import dayjs from 'dayjs';

function humanizeDate(date,dateFormat) {
  return date ? dayjs(date).format(dateFormat) : '';
}

export {humanizeDate};
