import {render} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import PointsModel from './model/points-model.js';
import EventsListPresenter from './presenter/events-list-presenter.js';

const header = document.querySelector('header');
const main = document.querySelector('main');

const tripMainContainer = header.querySelector('.trip-main');
const filterContainer = header.querySelector('.trip-controls__filters');
const sortContainer = main.querySelector('.trip-events');
const tripContainer = main.querySelector('.trip-events');

const tripInfoMainComponent = new TripInfoView();
const filterComponent = new FilterView();
const sortComponent = new SortView();
const pointsModel = new PointsModel();

const eventListPresenter = new EventsListPresenter({
  eventsListContainer: tripContainer,
  pointsModel,
});

render(tripInfoMainComponent, tripMainContainer, 'afterbegin');
render (filterComponent, filterContainer, 'beforeend');
render (sortComponent, sortContainer, 'beforeend');
eventListPresenter.init();


