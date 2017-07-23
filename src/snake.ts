export enum HEADING {
  'left', 'up', 'right', 'down'
}

export interface ISnakeOptions {
  heading?: HEADING;
  length?: number;
  origin?: object;
  fillStyle?: string;
  lives?: number;
}

export interface ICoords {
  x: number;
  y: number;
}

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