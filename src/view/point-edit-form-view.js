import {humanizeDate} from '../utils/point.js';
import {getRandomNumber} from '../utils/common.js';
import {DATE_TIME_EDIT_FORMAT, TIME_FORMAT} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

//Функция для генерации КАРТИНОК
const createImgList = (arr) => arr.map((item) => `
  <img class="event__photo" src="${item.src}" alt="${item.description}">
  `).join('');

//Функция для генерации ВЫПАДАЮЩИХ ГОРОДОВ
const createOptionsList = (arr) => arr.map((item) => `<option value="${item.name}"></option>`).join('');

//Функция для генерации ВЫПАДАЮЩИХ ТИПОВ
const createEventList = (arr, type) => arr.map((item) => `<div class="event__type-item">
  <input id="event-type-${item.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.type}" ${item.type === type ? 'checked' : ''}>
  <label class="event__type-label  event__type-label--${item.type}" for="event-type-${item.type}-1">${item.type}</label>
</div>`).join('');

/*Функция для отрисовки _чекнутых_ Офферов */
const createOfferSelectors = (arr, base, type, pointID) => arr.map((item) => {
  const isChecked = base.includes(+item.id) ? 'checked' : '';
  return `<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${pointID}-${item.id}" type="checkbox" name="event-offer-${type}" ${isChecked ? 'checked' : ''}>
              <label class="event__offer-label" for="event-offer-${pointID}-${item.id}">
                <span class="event__offer-title">${item.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${item.price}</span>
              </label>
            </div>`;
}).join('');


/* Функция для ШАБЛОНА создания Формы редактирования */
function createPointEditFormTemplate(point, destinations, offers) {
  const {id: pointID, offers: eventOffers, dateFrom, dateTo, basePrice, type} = point;

  const pointDestination = destinations.find((item) => point.destination === item.id);
  const description = pointDestination.description;
  const pictures = pointDestination.pictures;
  //const { description, pictures } = pointDestination;

  //Rendering form structure
  const createEventFotoList = createImgList(pictures);
  const createCityNameList = createOptionsList(destinations);
  const createEventTypeList = createEventList(offers, type);

  //Find & render offers checking list
  const currentOffer = offers.find((item) => item.type === type);
  const { type: curentOfferType, offers: currentOfferArr } = currentOffer;
  const createOffersSelectorList = createOfferSelectors(currentOfferArr, eventOffers, curentOfferType, pointID);

  const dateFromEvent = humanizeDate(dateFrom, DATE_TIME_EDIT_FORMAT); /*Начальная дата, отформатированная*/
  const dateToEvent = humanizeDate(dateTo, DATE_TIME_EDIT_FORMAT); /*Конечная дата, отформатированная*/
  const timeFromEvent = humanizeDate(dateFrom, TIME_FORMAT); //время начала
  const timeToEvent = humanizeDate(dateTo, TIME_FORMAT); // время окончания

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                          ${createEventTypeList}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointDestination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${createCityNameList}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFromEvent} ${timeFromEvent}">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateToEvent} ${timeToEvent}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">{basePrice}</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${createOffersSelectorList}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${createEventFotoList}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>`;
}

export default class PointEditFormView extends AbstractView {
  #point = null;
  #destinations = null;
  #offers = null;
  #handleEditFormSubmit = null;
  #handleEditFormReset = null;

  constructor({point, destinations, offers, onEditFormSubmit, onEditFormReset}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handleEditFormSubmit = onEditFormSubmit;
    this.#handleEditFormReset = onEditFormReset;

    this.element.querySelector('form')
      .addEventListener('submit', this.#submitFormHandler);

    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#resetFormHandler);
  }

  get template() {
    return createPointEditFormTemplate(this.#point, this.#destinations, this.#offers);
  }

  #submitFormHandler = (e) => {
    e.preventDefault();
    this.#handleEditFormSubmit();
  };

  #resetFormHandler = (e) => {
    e.preventDefault();
    this.#handleEditFormReset();
  };
}

