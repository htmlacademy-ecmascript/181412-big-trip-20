import {RenderPosition, render, remove, replace} from '../framework/render.js';
import PointsListView from '../view/point-list-view.js'; //ul
import TripInfoView from '../view/trip-info-view.js';
import SortView from '../view/sort-view.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter';
import PointView from "../view/point-view";
import PointEditFormView from "../view/point-edit-form-view";

export default class EventsListPresenter {
  #pointsModel = null;
  #eventsListContainer = null;

  #pointsListComponent = new PointsListView();
  #sortComponent = new SortView(); // Создаем экземпляр сортировки
  #emptyListComponent = new EmptyListView(); // Создаем экземпляер пустого листа


  constructor({eventsListContainer, pointsModel}) {
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    /* Передаем массив точек */
    const points = [...this.#pointsModel.getPoints()];
    const destinations = this.#pointsModel.getDestinations();
    const offers = this.#pointsModel.getOffers();

    if (points.length === 0) {
      this.#renderEmptyList();
    }

    const pointPresenter = new PointPresenter({
      points,
      destinations,
      offers,
      pointListContainer: this.#pointsListComponent.element
    });

    // pointPresenter.init(point);
    //Отрисовывает, но нормально работает ТОЛЬКО последний
    for (let i = 0; i < points.length; i++) {
      pointPresenter.init(points[i]);
    }
  }


  //Метод для отрисовки ЗАГОЛОВКА
  #renderTitle() {
    const tripMainContainer = document.querySelector('.trip-main');
    render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);

  }
  // Метод для отрисовки СОРТИРОВКИ
  #renderSort() {
    render(this.#sortComponent, this.#eventsListContainer);
  }
  // Метод для отрисовки ПУСТОГО ЛИСТА
  #renderEmptyList() {
    render(this.#emptyListComponent, this.#eventsListContainer);
  }



}


