import { Robot } from '../../model/Robot';
import { Direction } from '../../instance/Direction';
import { ReportCommand } from './ReportCommand';
import { mockView } from '../../mocks/MockView';

describe('ReportCommand', () => {
  let underTest: ReportCommand;

  beforeEach(() => {
    jest.clearAllMocks();
    underTest = new ReportCommand(mockView);
  });

  describe('executeCommand', () => {
    it('should call view.reportPosition with the right param', () => {
      const mockRobotPosition = {
        xPosition: 0,
        yPosition: 0,
        direction: Direction.NORTH,
      };
      const mockRobot = new Robot(mockRobotPosition);

      underTest.executeCommand(mockRobot);

      expect(mockView.reportPosition).toHaveBeenCalledWith(mockRobotPosition);
    });
  });
});
