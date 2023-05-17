import {render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointEditFormView from "../view/point-edit-form-view.js";

export default class PointPresenter {
  #points = null;
  #destinations = null;
  #offers = null;
  #pointListContainer= null; // будущий список (ul)
  #pointComponent = null; // будущая точка (li)
  #pointEditFormComponent = null;// будущая форма редактирования

  #item = null;
  #escKeyHandler = null;

  constructor({points, destinations, offers, pointListContainer}) {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#pointListContainer = pointListContainer;
  }

  #renderPoints(point, destinations, offers) { /*При вызове метода нужно будет передать точку*/
    // Создаем экземпляр ТОЧКИ, передавая данные точки и хэндлер при клике (открытии)
    this.#pointComponent = new PointView({ /* Создаем экзепляр Точки*/
      point,
      destinations,
      offers,
      onPointEditClick: () => { // ЧТО делаем при раскрытии формы
        this.#replacePointToForm();
      },
    });

    // Создаем экземпляр Формы, передавая данные точку и хэндлер при отправке и сбросе)
    this.#pointEditFormComponent = new PointEditFormView({
      point,
      destinations,
      offers,
      onEditFormSubmit: () => {
        this.#replaceFormToPoint();
      }, // что делаем при ОТПРАВКЕ формы
      onEditFormReset: () => {
        this.#replaceFormToPoint();
      },//  что делаем при СБРОСЕ формы
    })

    render(this.#pointComponent,this.#pointListContainer);
  }

  // МЕТОД для замены _точки_ на ФОРМУ
  #replacePointToForm() {
    replace(this.#pointEditFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  // МЕТОД для замены _формы_ на ТОЧКУ
  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointEditFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  // МЕТОД, что делаем при КЛИКЕ/РАСКРЫТИИ (заменяем точку на форму)
  #handlePointEditClick = () => {
    this.#replacePointToForm();
  }

  // МЕТОД, что делаем при ОТПРАВКЕ формы (заменяем форму на точку)
  #handleEditFormSubmit = () => {
    this.#replaceFormToPoint()
  }

  // МЕТОД, что делаем при СБРОСЕ формы (заменяем форму на точку)
  #handleEditFormReset = () => {
    this.#replaceFormToPoint();
  }

  // МЕТОД, что делаем при нажатии на кнопку Esc
  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  init(item) {
    this.#item = item;
    this.#renderPoints(this.#item, this.#destinations, this.#offers);
  }
}