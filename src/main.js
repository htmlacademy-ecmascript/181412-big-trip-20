import {render} from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';

import EventsList from './presenter/events-list.js';

const header = document.querySelector('header')
const main = document.querySelector('main')

const tripMainContainer = header.querySelector('.trip-main');
const filterContainer = header.querySelector('.trip-controls__filters');
const sortContainer = main.querySelector('.trip-events');
const tripContainer = main.querySelector('.trip-events')

const tripInfoMainComponent = new TripInfoView();
const FilterComponent = new FilterView();
const SortComponent = new SortView();

const eventList = new EventsList({eventsListContainer: tripContainer});

render(tripInfoMainComponent, tripMainContainer, 'afterbegin');
render (FilterComponent,filterContainer, 'beforeend');
render (SortComponent,sortContainer, 'beforeend');

eventList.init();