import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';
import { TurnCommand } from './TurnCommand';

export class RightCommand extends TurnCommand implements ICommand {
  executeCommand(robot: Robot): void {
    const ROTATION = [
      Direction.NORTH,
      Direction.EAST,
      Direction.SOUTH,
      Direction.WEST,
    ];
    super.executeCommand(robot, ROTATION);
  }
}
