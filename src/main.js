import {render, RenderPosition} from './framework/render.js';
import FilterView from './view/filter-view.js';
import PointsModel from './model/points-model.js';
import EventsListPresenter from './presenter/events-list-presenter.js';
import {generateFilter} from "./mock/filter.js";


/* DOM ЭЛЕМЕНТЫ!!!! */
const filterContainer = document.querySelector('.trip-controls__filters');
const eventContainer = document.querySelector('.trip-events');

/*ЭКЗЕМПЛЯРЫ вьюшек*/
const pointsModel = new PointsModel(); // Точки

const filters = generateFilter(PointsModel.points)


const eventListPresenter = new EventsListPresenter({
  eventsListContainer: eventContainer,
  pointsModel,
});

/*Вставляем фильтры */
render (new FilterView({filters}), filterContainer, RenderPosition.BEFOREEND);

/*Вставляем точки */
eventListPresenter.init();


