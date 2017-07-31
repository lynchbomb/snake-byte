import { HEADING } from '../heading';
import ICoords from './i-coords';

export default interface ISnakeOptions {
  heading?: HEADING;
  length?: number;
  origin?: object;
  fillStyle?: string;
  lives?: number;
  coords?: ICoords[];
};
