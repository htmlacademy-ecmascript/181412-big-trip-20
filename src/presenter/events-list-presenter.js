import {RenderPosition, render} from '../framework/render.js';
import EventsListContainer from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import PointEditFormView from '../view/point-edit-form-view.js';

export default class EventsListPresenter {
  eventsListComponent = new EventsListContainer();

  constructor({eventsListContainer, pointsModel}) {
    this.eventsListContainer = eventsListContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    /* Передаем массив точек */
    this.boardPoints = [...this.pointsModel.getPoints()];

    // вставляем сам лист в контейнер
    render(this.eventsListComponent, this.eventsListContainer, RenderPosition.BEFOREEND);

    //добавляем форму
    render(new PointEditFormView({point: this.boardPoints[0]}), this.eventsListComponent.element, RenderPosition.AFTERBEGIN);
    // добавляем точки
    for(let i = 0; i < this.boardPoints.length ; i++) {
      render(new PointView({point: this.boardPoints[i]}), this.eventsListComponent.element);
    }
  }
}


