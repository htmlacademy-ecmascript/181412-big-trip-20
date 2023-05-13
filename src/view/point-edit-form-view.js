import {humanizeDate} from '../utils.js';
import {getRandomNumber} from '../utils.js';
import {offersByTypes} from '../mock/mocks.js';
import {DATE_TIME_EVENT} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';

/* Форма редактирования точки */
function createPointEditFormTemplate(point) {
  const {dateFrom, dateTo, destination, timeTo, timeFrom, basePrice, description, offers, type} = point;
  const dateFromEvent = humanizeDate(dateFrom, DATE_TIME_EVENT); /*Начальная дата, отформатированная*/
  const dateToEvent = humanizeDate(dateTo, DATE_TIME_EVENT); /*Конечная дата, отформатированная*/
  const pointTypeOffer = offersByTypes.find(
    (item) => item.type === type); /*Нашли список офферов для нашего ТИПА*/
    //console.log('ТОЧКА point', point)
    //console.log('выбранные офферы offers', offers) /*выбранные офферы */
    //console.log('список офферов по ТИПУ pointTypeOffer', pointTypeOffer) /*список офферов по ТИПУ*/
    //console.log(pointTypeOffer.offers)

  /*Функция для отрисовки _чекнутых_ Офферов */
  const createCheckedTripOffersTemplate = pointTypeOffer.offers.map((offer) => {
    const isChecked = offers.includes(offer.id);
    return (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}-1" type="checkbox" name="event-offer-luggage" ${isChecked ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-luggage-1">
          <span class="event__offer-title">${offer.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div> `);
  }).join('');

  /*Функция для отрисовки выпадающего списка типов */
  const createEventTypeList = offersByTypes.map((item) =>
    `<div class="event__type-item">
      <input id="event-type-${item.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item.type}">
      <label class="event__type-label  event__type-label--${item.type}" for="event-type-${item.type}-1">${item.type}</label>
    </div>`
  ).join('');

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
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateFromEvent} ${timeTo}">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateToEvent} ${timeFrom}">
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
                      ${createCheckedTripOffersTemplate}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${description}</p>

                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        <img class="event__photo" src="img/photos/${getRandomNumber(1,5)}.jpg" alt="Event photo">
                        <img class="event__photo" src="img/photos/${getRandomNumber(1,5)}.jpg" alt="Event photo">
                        <img class="event__photo" src="img/photos/${getRandomNumber(1,5)}.jpg" alt="Event photo">
                        <img class="event__photo" src="img/photos/${getRandomNumber(1,5)}.jpg" alt="Event photo">
                        <img class="event__photo" src="img/photos/${getRandomNumber(1,5)}.jpg" alt="Event photo">
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>`;
}

export default class PointEditFormView extends AbstractView {
  constructor({point}) {
    super();
    this.point = point;
  }

  get template() {
    return createPointEditFormTemplate(this.point);
  }
}

