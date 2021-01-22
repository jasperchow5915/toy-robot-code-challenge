import { RightCommand } from './RightCommand';
import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';

describe('RightCommand', () => {
  let underTest: RightCommand;

  beforeEach(() => {
    underTest = new RightCommand();
  });

  it('should rotate the robot to east if it is facing north', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.NORTH,
    });

    underTest.executeCommand(mockRobot);

    expect(mockRobot.getCurrentPosition().direction).toEqual(Direction.EAST);
  });

  it('should rotate the robot to south if it is facing east', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.EAST,
    });

    underTest.executeCommand(mockRobot);

    expect(mockRobot.getCurrentPosition().direction).toEqual(Direction.SOUTH);
  });

  it('should rotate the robot to west if it is facing south', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.SOUTH,
    });

    underTest.executeCommand(mockRobot);

    expect(mockRobot.getCurrentPosition().direction).toEqual(Direction.WEST);
  });

  it('should rotate the robot to north if it is facing west', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.WEST,
    });

    underTest.executeCommand(mockRobot);

    expect(mockRobot.getCurrentPosition().direction).toEqual(Direction.NORTH);
  });
});
