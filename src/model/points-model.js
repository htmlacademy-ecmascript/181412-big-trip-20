import { mockPoints, mockDestinations, mockOffers ,getRandomPoint} from '../mock/mocks.js';

const POINT_COUNT = 6;

export default class PointsModel {
  constructor() {
    this.points = mockPoints;/*Получаем массив точек*/
    this.destinations = mockDestinations;
    this.offers = mockOffers;
  }
  getPoints() {
    return this.points;
  }
  getDestinations() {
    return this.destinations;
  }
  getOffers() {
    return this.offers;
  }
}

