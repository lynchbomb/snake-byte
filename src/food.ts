import ICoords from './snake';

export interface IFood {
  apple?: string;
  bacon?: string;
}

export default class Food {
  coords: ICoords;
  constructor() {
    
  }
}