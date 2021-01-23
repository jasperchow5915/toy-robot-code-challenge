import { ICommand } from './interface/ICommand';
import { Robot } from '../../model/Robot';
import { IView } from '../../view/interface/IView';

export class ReportCommand implements ICommand {
  constructor(private view: IView) {}

  executeCommand(robot: Robot): void {
    const currentPosition = robot.getCurrentPosition();

    this.view.reportPosition(currentPosition);
  }
}
