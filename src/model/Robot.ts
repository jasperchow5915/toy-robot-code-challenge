import { IRobotPosition } from './interface/IRobotPosition';

export class Robot {
  constructor(private robotPosition: IRobotPosition) {}

  getCurrentPosition(): IRobotPosition {
    return this.robotPosition;
  }

  setCurrentPosition(position: IRobotPosition): void {
    this.robotPosition = position;
  }
}
