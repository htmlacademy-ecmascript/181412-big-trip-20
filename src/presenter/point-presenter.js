import {render, replace} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointEditFormView from "../view/point-edit-form-view.js";

export default class PointPresenter {
  #pointListContainer= null; // будущий список (ul)

  #pointComponent = null; // будущая точка (li)
  #pointEditFormComponent = null;// будущая форма редактирования

  #point = null;

  constructor({pointListContainer}) { /*При создании нужно будет указывать, куда вставляем*/
    this.#pointListContainer = pointListContainer;
  }

  init(point) { /*При вызове метода нужно будет передать точку*/
    this.#point = point;

    // Создаем экземпляр Точки, передавая данные точки и хэндлер при клике (открытии)
    this.#pointComponent = new PointView({ /* Создаем экзепляр Точки*/
      point: this.#point,
      onPointEditClick: this. #handleEditFormSubmit,
    });

    // Создаем экземпляр Формы, передавая данные точку и хэндлер при отправке и сбросе)
    this.#pointEditFormComponent = new PointEditFormView({
      point: this.#point,
      onEditFormSubmit: this.#handleEditFormSubmit,
      onResetFormSubmit: this.#handleResetFormSubmit
    });

    render(this.#pointComponent,this.#pointListContainer);
  }
  // МЕТОД для замены _точки_ на ФОРМУ
  #replacePointToForm() {
    replace(this.#pointEditFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  // МЕТОД для замены _формы_ на ТОЧКУ
  #replaceFormToPoint() {
    replace(pointComponent, pointEditFormComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  // МЕТОД, что делаем при редактировании (заменяем точку на форму)
  #handleEditFormSubmit = () => {
    this.#replacePointToForm;
  }

  // МЕТОД, что делаем при сворачивании формы (заменяем форму на точку)
  #handleResetFormSubmit = () => {
    this.#replaceFormToPoint;
  }

  // МЕТОД, что делаем при нажатии на кнопку Esc
  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };
}