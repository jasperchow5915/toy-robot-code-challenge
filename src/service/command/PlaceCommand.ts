import { IView } from '../../view/interface/IView';
import { IRobotPosition } from '../../model/interface/IRobotPosition';
import { BoundaryService } from '../BoundaryService';
import { RobotService } from '../RobotService';

export class PlaceCommand {
  constructor(
    private view: IView,
    private boundaryService: BoundaryService,
    private robotService: RobotService,
  ) {}

  executeCommand(robotPosition: IRobotPosition | undefined): void {
    if (robotPosition === undefined) {
      throw new Error('Could not get new robot position');
    }

    const positionWithinBoundary = this.boundaryService.checkPositionWithinBoundary(
      robotPosition,
      this.view,
    );

    if (!positionWithinBoundary) {
      throw new Error('Invalid position');
    }

    this.robotService.createNewRobot(robotPosition);
  }
}
