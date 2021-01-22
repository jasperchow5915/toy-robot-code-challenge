import { PlaceCommand } from './PlaceCommand';
import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';

describe('PlaceCommand', () => {
  let underTest: PlaceCommand;
  let mockView;

  beforeEach(() => {
    mockView = {
      reportPosition: jest.fn(() => undefined),
      getBoardBoundaries: jest.fn(() => {
        return {
          maxXPosition: 4,
          maxYPosition: 4,
        };
      }),
    };

    underTest = new PlaceCommand(mockView);
  });

  it('should not place if out of bounds in the negative x position', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.SOUTH,
    });
    const mockRobotPosition = {
      xPosition: -1,
      yPosition: 1,
      direction: Direction.NORTH,
    };

    expect(() => {
      underTest.executeCommand(mockRobot, mockRobotPosition);
    }).toThrowError(new Error('Invalid x position'));
  });

  it('should not place if out of bounds in the positive x position', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.SOUTH,
    });
    const mockRobotPosition = {
      xPosition: 6,
      yPosition: 1,
      direction: Direction.NORTH,
    };

    expect(() => {
      underTest.executeCommand(mockRobot, mockRobotPosition);
    }).toThrowError(new Error('Invalid x position'));
  });

  it('should not place if out of bounds in the negative y position', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.SOUTH,
    });
    const mockRobotPosition = {
      xPosition: 1,
      yPosition: -1,
      direction: Direction.NORTH,
    };

    expect(() => {
      underTest.executeCommand(mockRobot, mockRobotPosition);
    }).toThrowError(new Error('Invalid y position'));
  });

  it('should not place if out of bounds in the positive y position', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.SOUTH,
    });
    const mockRobotPosition = {
      xPosition: 1,
      yPosition: 7,
      direction: Direction.NORTH,
    };

    expect(() => {
      underTest.executeCommand(mockRobot, mockRobotPosition);
    }).toThrowError(new Error('Invalid y position'));
  });

  it('should place if in bounds', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.SOUTH,
    });
    const mockRobotPosition = {
      xPosition: 1,
      yPosition: 1,
      direction: Direction.NORTH,
    };

    underTest.executeCommand(mockRobot, mockRobotPosition);

    expect(mockRobot.getCurrentPosition()).toEqual(mockRobotPosition);
  });

  it('should place if in bounds at the bounds', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.SOUTH,
    });
    const mockRobotPosition = {
      xPosition: 4,
      yPosition: 4,
      direction: Direction.NORTH,
    };

    underTest.executeCommand(mockRobot, mockRobotPosition);

    expect(mockRobot.getCurrentPosition()).toEqual(mockRobotPosition);
  });
});
