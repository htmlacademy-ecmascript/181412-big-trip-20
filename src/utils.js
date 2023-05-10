import dayjs from 'dayjs';

function humanizeDate(date,dateFormat) {
  return date ? dayjs(date).format(dateFormat) : '';
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomNumber = (a, b) => {

  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const isOfferChecked = (checked) => Object.values(checked).some(Boolean);

export { getRandomArrayElement, getRandomNumber, humanizeDate, isOfferChecked };

