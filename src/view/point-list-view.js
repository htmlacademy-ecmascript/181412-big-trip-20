import AbstractView from '../framework/view/abstract-view.js';

function createEventsListContainer() {
  return '<ul class="trip-events__list"></ul>';
}

export default class EventsListContainer extends AbstractView {
  get template() {
    return createEventsListContainer();
  }
}

