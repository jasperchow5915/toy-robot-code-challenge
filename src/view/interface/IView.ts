import { IBoardBoundaries } from './IBoardBoundaries';

export interface IView {
  reportPosition: () => void;
  getBoardBoundaries: () => IBoardBoundaries;
}
