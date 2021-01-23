import { PlaceCommand } from './PlaceCommand';
import { Direction } from '../../instance/Direction';
import { mockView } from '../../mocks/MockView';
import { mockBoundaryService } from '../../mocks/MockBoundaryService';
import { mockRobotService } from '../../mocks/MockRobotService';

describe('PlaceCommand', () => {
  let underTest: PlaceCommand;

  beforeEach(() => {
    jest.clearAllMocks();
    underTest = new PlaceCommand(
      mockView,
      mockBoundaryService,
      mockRobotService,
    );
  });

  it('should not place if out of bounds', () => {
    const mockRobotPosition = {
      xPosition: -1,
      yPosition: 1,
      direction: Direction.NORTH,
    };
    mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(false);

    expect(() => {
      underTest.executeCommand(mockRobotPosition);
    }).toThrowError(new Error('Invalid position'));
  });

  it('should place if in bounds', () => {
    const mockRobotPosition = {
      xPosition: 1,
      yPosition: 1,
      direction: Direction.NORTH,
    };
    mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

    underTest.executeCommand(mockRobotPosition);

    expect(mockRobotService.createNewRobot).toHaveBeenCalledWith(
      mockRobotPosition,
    );
  });

  it('should throw an error if robotPosition is undefined', () => {
    expect(() => {
      underTest.executeCommand(undefined);
    }).toThrowError(new Error('Could not get new robot position'));
  });
});
