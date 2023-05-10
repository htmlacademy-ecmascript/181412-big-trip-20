import {render, RenderPosition } from '../render.js';
import {createElement} from '../render.js';

import TripEventsItemView from '../view/trip-events-item-view.js';
import TripEventsFormView from '../view/trip-events-form-view.js';

function createEventsListContainer() {
  return '<ul class="trip-events__list"></ul>';
}

class EventsListContainer {
  getTemplate() {
    return createEventsListContainer();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export default class EventsListPresenter {
  eventsListComponent = new EventsListContainer();


  constructor({eventsListContainer, pointsModel}) {
    this.eventsListContainer = eventsListContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];

    render(this.eventsListComponent, this.eventsListContainer,'beforeend'); // вставляем сам лист в контейнер

    render(new TripEventsFormView({point: this.boardPoints[0]}), this.eventsListComponent.getElement(), RenderPosition.AFTERBEGIN); //добавляем форму

    for(let i = 0; i < this.boardPoints.length ; i++) {
      render(new TripEventsItemView({point: this.boardPoints[i]}), this.eventsListComponent.getElement()); // добавляем события
    }
  }
}


