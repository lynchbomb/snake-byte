import ICoords from './interfaces/i-coords';
import ISnakeOptions from './interfaces/i-snake-options';
import IFood from './interfaces/i-food';
import { HEADING } from './heading';

export default class Snake {
  heading: HEADING;
  length: number;
  origin: object;
  fillStyle: string;
  lives: number;
  width: number = 1;
  height: number = 1;
  coords: Array<ICoords>;

  constructor(options: ISnakeOptions) {
    this.heading = options.heading || this.heading;
    this.length = options.length || 1;
    this.origin = options.origin || {x: 0, y: 0};
    this.fillStyle = options.fillStyle || '#000';
    this.lives = options.lives || 3;
    // TODO: overly simplified prob flush this out to be a function or class
    this.coords = [];
  
    this.defaultCoords();
  }

  defaultCoords() {
    for (var i = 0; i < 20; i++) {
      this.coords.push({x: i, y: 0});
    }
  }

  incrementDirection(direction: string) {
    let currentHeadCoords = this.coords[0];
    
    switch (direction) {
      case 'right': currentHeadCoords.x = currentHeadCoords.x + 1;
        break;    
    }

    this.updateCoords(currentHeadCoords);
  }

  updateCoords(newHeadCoords: ICoords) {
    this.coords[0] = newHeadCoords;
  }

  eat(food: IFood) {
    let _l = 0;

    switch (food) {
      case 'apple': _l = 1;
        break;    
    }

    this.length = this.length + _l;
  }

  destroy() {
    this.length = 0;
    this.heading = 0;
    this.lives = 0;
  }
}