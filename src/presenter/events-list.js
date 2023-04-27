import {render} from '../render.js';
import {createElement} from '../render.js';

import TripEventsItemView from '../view/trip-events-item-view.js';
import TripEventsFormView from '../view/trip-events-form-view.js';

function createEventsListContainer() {
    return `<ul class="trip-events__list"></ul>`
}

class EventsListContainer {
    getTemplate() {
        return createEventsListContainer()
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

export default class EventsList {
    eventsListComponent = new EventsListContainer();


    constructor({eventsListContainer}) {
        this.eventsListContainer = eventsListContainer;
    }

    init() {
        render(this.eventsListComponent, this.eventsListContainer,'beforeend') // вставляем сам лист в контейнер
        render(new TripEventsFormView, this.eventsListComponent.getElement(),'afterbegin'); //добавляем форму
        for(let i =0; i <3 ; i++) {
            render(new TripEventsItemView(), this.eventsListComponent.getElement()) // добавлляем события
        }
    }
}


