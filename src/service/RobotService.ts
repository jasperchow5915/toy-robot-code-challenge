import { Direction } from '../instance/Direction';
import { Robot } from '../model/Robot';

export class RobotService {
  createNewRobot(direction: Direction) {
    return new Robot(direction);
  }
}
