import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';

export class RightCommand implements ICommand {
  executeCommand(robot: Robot): void {}
}
