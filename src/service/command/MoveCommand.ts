import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';
import { IMovement } from './interface/IMovement';
import { IView } from '../../view/interface/IView';
import { BoundaryService } from '../BoundaryService';
import { IRobotPosition } from '../../model/interface/IRobotPosition';

export class MoveCommand implements ICommand {
  constructor(private view: IView, private boundaryService: BoundaryService) {}

  readonly movementMap: IMovement = {
    [Direction.NORTH]: {
      xIncrement: 0,
      yIncrement: 1,
    },
    [Direction.SOUTH]: {
      xIncrement: 0,
      yIncrement: -1,
    },
    [Direction.EAST]: {
      xIncrement: 1,
      yIncrement: 0,
    },
    [Direction.WEST]: {
      xIncrement: -1,
      yIncrement: 0,
    },
  };

  executeCommand(robot: Robot): void {
    const currentPosition = robot.getCurrentPosition();
    const currentDirection = currentPosition.direction;

    const movementToExecute = this.movementMap[currentDirection];
    const newPosition: IRobotPosition = {
      ...currentPosition,
      xPosition: currentPosition.xPosition + movementToExecute.xIncrement,
      yPosition: currentPosition.yPosition + movementToExecute.yIncrement,
    };
    const positionWithinBoundary = this.boundaryService.checkPositionWithinBoundary(
      newPosition,
      this.view,
    );

    if (!positionWithinBoundary) {
      throw new Error('Invalid move, will go out of bounds');
    }

    robot.setCurrentPosition(newPosition);
  }
}
