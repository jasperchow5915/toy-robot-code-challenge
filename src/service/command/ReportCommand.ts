import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';

export class ReportCommand implements ICommand {
  executeCommand(robot: Robot): void {
    const currentPosition = robot.getCurrentPosition();
  }
}
