import {getRandomPoint} from '../mock/mocks.js';

const POINT_COUNT = 6;

export default class PointsModel {
  /*Получаем массив точек*/
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);


  get points() {
    return this.#points;
  }
}

