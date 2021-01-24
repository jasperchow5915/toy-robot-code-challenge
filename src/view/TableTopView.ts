import { IView } from './interface/IView';
import { IBoardBoundaries } from './interface/IBoardBoundaries';
import { IRobotPosition } from '../model/interface/IRobotPosition';
import { ILoggingService } from '../service/command/interface/ILoggingService';

export class TableTopView implements IView {
  constructor(private loggingService: ILoggingService) {}

  reportPosition(currentPosition: IRobotPosition): void {
    this.loggingService.log(
      `${currentPosition.xPosition},${currentPosition.yPosition},${currentPosition.direction}`,
    );
  }

  getBoardBoundaries(): IBoardBoundaries {
    return {
      minXPosition: 0,
      maxXPosition: 4,
      minYPosition: 0,
      maxYPosition: 4,
    };
  }

  displayError(error: Error): void {
    this.loggingService.error(`Error: ${error.message}`);
  }
}
