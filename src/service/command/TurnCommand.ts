import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';
import { IRobotPosition } from '../../model/interface/IRobotPosition';

export class TurnCommand {
  executeCommand(robot: Robot, ROTATION: Direction[]): void {
    const currentPosition = robot.getCurrentPosition();
    const newDirection = ROTATION.reduce((result, rotation, index) => {
      if (result !== undefined) {
        return result;
      }

      if (
        rotation === currentPosition.direction &&
        index === ROTATION.length - 1
      ) {
        return ROTATION[0];
      }

      if (rotation === currentPosition.direction) {
        return ROTATION[index + 1];
      }

      return result;
    }, undefined);

    const newPosition: IRobotPosition = {
      ...currentPosition,
      direction: newDirection,
    };
    robot.setCurrentPosition(newPosition);
  }
}
