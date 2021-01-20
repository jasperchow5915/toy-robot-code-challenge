import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';

export class MoveCommand implements ICommand {
  executeCommand(robot: Robot): void {}
}
