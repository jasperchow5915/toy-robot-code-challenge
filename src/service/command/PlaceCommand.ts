import { Robot } from '../../model/Robot';
import { IView } from '../../view/interface/IView';
import { IRobotPosition } from '../../model/interface/IRobotPosition';

export class PlaceCommand {
  constructor(private view: IView) {}

  executeCommand(robot: Robot, robotPosition: IRobotPosition): void {
    const boundaries = this.view.getBoardBoundaries();

    if (
      robotPosition.xPosition > boundaries.maxXPosition ||
      robotPosition.xPosition < 0
    ) {
      throw new Error('Invalid x position');
    }

    if (
      robotPosition.yPosition > boundaries.maxYPosition ||
      robotPosition.yPosition < 0
    ) {
      throw new Error('Invalid y position');
    }

    robot.setCurrentPosition(robotPosition);
  }
}
