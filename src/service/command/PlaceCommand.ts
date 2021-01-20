import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';

export class PlaceCommand implements ICommand {
  executeCommand(robot: Robot): void {}
}
