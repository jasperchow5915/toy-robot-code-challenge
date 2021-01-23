import { IRobotPosition } from '../model/interface/IRobotPosition';
import { IView } from '../view/interface/IView';

export class BoundaryService {
  checkPositionWithinBoundary(
    robotPosition: IRobotPosition,
    view: IView,
  ): boolean {
    const boundaries = view.getBoardBoundaries();

    if (
      robotPosition.xPosition > boundaries.maxXPosition ||
      robotPosition.xPosition < boundaries.minXPosition
    ) {
      return false;
    }

    if (
      robotPosition.yPosition > boundaries.maxYPosition ||
      robotPosition.yPosition < boundaries.minYPosition
    ) {
      return false;
    }
    return true;
  }
}
