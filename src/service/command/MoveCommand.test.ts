import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';
import { MoveCommand } from './MoveCommand';
import { mockView } from '../../mocks/MockView';
import { mockBoundaryService } from '../../mocks/MockBoundaryService';

describe('MoveCommand', () => {
  let underTest: MoveCommand;

  beforeEach(() => {
    underTest = new MoveCommand(mockView, mockBoundaryService);
  });

  it('should move forward one step north if it is facing north', () => {
    const mockRobot = new Robot({
      xPosition: 0,
      yPosition: 0,
      direction: Direction.NORTH,
    });
    mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

    underTest.executeCommand(mockRobot);

    expect(mockRobot.getCurrentPosition()).toEqual({
      xPosition: 0,
      yPosition: 1,
      direction: Direction.NORTH,
    });
  });
});
