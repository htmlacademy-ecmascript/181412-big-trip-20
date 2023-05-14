import {RenderPosition, render, replace} from '../framework/render.js';
import EventsListContainer from '../view/point-list-view.js';
import TripInfoView from '../view/trip-info-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import PointEditFormView from '../view/point-edit-form-view.js';
import EmptyListView from '../view/empty-list-view.js';

export default class EventsListPresenter {
  #pointsModel = null;
  #eventsListContainer = null;
  #eventsListComponent = new EventsListContainer();

  #points = [];

  constructor({eventsListContainer, pointsModel}) {
    this.#eventsListContainer = eventsListContainer;
    this.#pointsModel = pointsModel;
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
      }
    };

    /* Создаем экземпляр точки */
    const pointComponent = new PointView({
      point,
      onPointEditClick: () => {
        replacePointToForm();
      }
    });

    /* Создаем экземпляр формы */
    const pointEditFormComponent = new PointEditFormView({
      point,
      onEditFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onResetFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    /* Функция для замены _точки_ на ФОРМУ */
    function replacePointToForm() {
      replace(pointEditFormComponent, pointComponent);
      document.addEventListener('keydown', escKeyDownHandler);
    }

    /* Функция для замены _формы_ на ТОЧКУ */
    function replaceFormToPoint() {
      replace(pointComponent, pointEditFormComponent);
      document.removeEventListener('keydown', escKeyDownHandler);
    }
    /*Отрисовываем!*/
    render(pointComponent, this.#eventsListComponent.element);
  }

  // Метод для отрисовки ТОЧЕК
  #renderPoints() {
    // Вставляем сортировку
    render(new SortView(), this.#eventsListContainer);

    // вставляем сам ul лист в контейнер
    render(this.#eventsListComponent, this.#eventsListContainer, RenderPosition.BEFOREEND);


    // теперь добавляем li точки
    for(let i = 0; i < this.#points.length ; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  //Метод для отрисовки ЗАГОЛОВКА
  #renderTitle() {
    const tripMainContainer = document.querySelector('.trip-main');
    render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);

  }

  init() {
    /* Передаем массив точек */
    this.#points = [...this.#pointsModel.points];

    if (this.#points.length === 0) {
      render(new EmptyListView(), this.#eventsListContainer);
    } else {
      this.#renderTitle(); // Рисуем верхний заголовок
      this.#renderPoints(); // Отрисовываем точки
    }
  }
}


