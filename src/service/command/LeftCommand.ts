import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';

export class LeftCommand implements ICommand {
  executeCommand(robot: Robot): void {}
}
