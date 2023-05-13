import {render, RenderPosition} from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import PointsModel from './model/points-model.js';
import EventsListPresenter from './presenter/events-list-presenter.js';

const header = document.querySelector('header');
const main = document.querySelector('main');

/* DOM ЭЛЕМЕНТЫ!!!! */
const tripMainContainer = header.querySelector('.trip-main');
const filterContainer = header.querySelector('.trip-controls__filters');
const eventContainer = main.querySelector('.trip-events');

/*ЭКЗЕМПЛЯРЫ вьюшек*/
const tripInfoMainComponent = new TripInfoView();
const filterComponent = new FilterView();
const sortComponent = new SortView();
const pointsModel = new PointsModel();


const eventListPresenter = new EventsListPresenter({
  eventsListContainer: eventContainer,
  pointsModel,
});

/*Вставляем заголовок в шапку*/
render(tripInfoMainComponent, tripMainContainer, RenderPosition.AFTERBEGIN);
//console.log('Вставляем заголовок в шапку')
//console.log(' AbstractView - tripInfoMainComponent', tripInfoMainComponent)
//console.log('HTML - tripMainContainer', tripMainContainer)

/*Вставляем фильтры */
render (filterComponent, filterContainer, RenderPosition.BEFOREEND);
/*Вставляем сортировку */
render (sortComponent, eventContainer, RenderPosition.BEFOREEND);
/*Вставляем точки */
eventListPresenter.init();


