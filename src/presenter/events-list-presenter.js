import {RenderPosition, render, remove} from '../framework/render.js';
import PointsListView from '../view/point-list-view.js';
import TripInfoView from '../view/trip-info-view.js';
import SortView from '../view/sort-view.js';
import EmptyListView from '../view/empty-list-view.js';
import PointPresenter from './point-presenter';

export default class EventsListPresenter {
  #pointsModel = null;
  #eventsListContainer = null;

  #pointsListComponent = new PointsListView();
  #sortComponent = new SortView(); // Создаем экземпляр сортировки
  #emptyListComponent = new EmptyListView(); // Создаем экземпляер пустого листа

  #points = [];

  constructor({eventsListContainer, pointsModel}) {
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
  }
  // Метод для отрисовки ТОЧКИ
  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointsListComponent.element
    });

    pointPresenter.init(point);
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

  // Метод для отрисовки ТОЧЕК
  #renderPoints() {
    // Вставляем сортировку
    this.#renderSort()

    // вставляем сам ul лист в контейнер
    render(this.#pointsListComponent, this.#eventsListContainer, RenderPosition.BEFOREEND);

    // теперь добавляем li точки
    for(let i = 0; i < this.#points.length ; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  init() {
    /* Передаем массив точек */
    this.#points = [...this.#pointsModel.points];

    if (this.#points.length === 0) {
      this.#renderEmptyList();
    } else {
      this.#renderTitle(); // Рисуем верхний заголовок
      this.#renderPoints(); // Отрисовываем точки
    }
  }
}


