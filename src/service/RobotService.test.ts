import { RobotService } from './RobotService';
import { Direction } from '../instance/Direction';
import { Robot } from '../model/Robot';

describe('RobotService', () => {
  let underTest: RobotService;
  beforeEach(() => {
    underTest = new RobotService();
  });

  describe('createNewRobot', () => {
    it('should create new robot and store it in robotService', () => {
      const mockRobotPosition = {
        xPosition: 1,
        yPosition: 1,
        direction: Direction.NORTH,
      };
      underTest.createNewRobot(mockRobotPosition);

      expect(underTest.currentRobot.getCurrentPosition()).toEqual(
        mockRobotPosition,
      );
    });
  });

  describe('getCurrentRobot', () => {
    it('should return the existing robot', () => {
      const mockRobot = new Robot({
        xPosition: 0,
        yPosition: 0,
        direction: Direction.EAST,
      });
      underTest.currentRobot = mockRobot;

      const result = underTest.getCurrentRobot();

      expect(result).toEqual(mockRobot);
    });
  });
});
