import { IBoardBoundaries } from './IBoardBoundaries';
import { IRobotPosition } from '../../model/interface/IRobotPosition';

export interface IView {
  reportPosition: (currentPosition: IRobotPosition) => void;
  getBoardBoundaries: () => IBoardBoundaries;
}
