import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';
import { TurnCommand } from './TurnCommand';

export class LeftCommand extends TurnCommand implements ICommand {
  executeCommand(robot: Robot): void {
    const ROTATION = [
      Direction.NORTH,
      Direction.WEST,
      Direction.SOUTH,
      Direction.EAST,
    ];
    super.executeCommand(robot, ROTATION);
  }
}
