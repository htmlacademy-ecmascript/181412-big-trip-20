import {humanizeDate, calculateDiffTime} from '../utils/point.js';
import { DATE_FORMAT, DATE_TIME_FORMAT, TIME_FORMAT } from '../const.js';
import {offersByTypes} from '../mock/mocks.js';
import AbstractView from '../framework/view/abstract-view.js';

/* Точка */
function createTripEventsItemTemplate(point) {
  const {basePrice, dateFrom, dateTo, isFavorite, destination, type, offers} = point;

  const favoriteClassName = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';

  const humanizeDateFrom = humanizeDate(dateFrom, DATE_FORMAT);
  const dateFromEvent = humanizeDate(dateFrom, DATE_TIME_FORMAT); // дата начала
  const dateToEvent = humanizeDate(dateTo, DATE_TIME_FORMAT); // дата окончания
  const timeFromEvent = humanizeDate(dateFrom, TIME_FORMAT); //время начала
  const timeToEvent = humanizeDate(dateTo, TIME_FORMAT); // время окончания

  const pointTypeOffer = offersByTypes.find((offer) => offer.type === type);
  const checkedOffers = pointTypeOffer.offers.filter((offer) => offers.includes(offer.id));
  const pointDuration = calculateDiffTime(dateFrom, dateTo);

  const createOffersListTemplate = () => { /* Функция для отрисовки выбранных офферов*/
    if (checkedOffers.length === 0) {
      return (
        `<li class="event__offer">
          <span class="event__offer-title">No additional offers!!</span>
        </li>`
      );
    }
    return checkedOffers.map((offer) =>
      `<li class="event__offer">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
      </li>`).join('');
  };


  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${dateFromEvent}">${humanizeDateFrom}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${type} ${destination}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${dateFromEvent}T${timeFromEvent}">${timeFromEvent}</time>
                    —
                    <time class="event__end-time" datetime="${dateToEvent}T${timeToEvent}">${timeToEvent}</time>
                  </p>
                  <p class="event__duration">${pointDuration}</p>
                </div>
                <p class="event__price">
                  €&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                   ${createOffersListTemplate()}
                </ul>
                <button class="${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

export default class PointView extends AbstractView {
  #point = null;
  #handlePointEditClick = null;

  constructor({point, onPointEditClick}) {
    super();
    this.#point = point;
    this.#handlePointEditClick = onPointEditClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editPointHandler);
  }

  get template() {
    return createTripEventsItemTemplate(this.#point);
  }

  #editPointHandler = (e) => {
    e.preventDefault();
    this.#handlePointEditClick();
  };
}

