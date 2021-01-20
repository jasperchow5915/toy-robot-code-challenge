import { Robot } from '../model/Robot';
import { IRobotPosition } from '../model/interface/IRobotPosition';

export class RobotService {
  currentRobot: Robot;

  getCurrentRobot(): Robot {
    return this.currentRobot;
  }

  createNewRobot(robotPosition: IRobotPosition): void {
    this.currentRobot = new Robot(robotPosition);
  }
}
