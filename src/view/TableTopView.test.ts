import { TableTopView } from './TableTopView';
import { mockLoggingService } from '../mocks/MockLoggingService';
import { Direction } from '../instance/Direction';

describe('TableTopView.ts', () => {
  let underTest: TableTopView;

  beforeEach(() => {
    jest.clearAllMocks();
    underTest = new TableTopView(mockLoggingService);
  });

  describe('reportPosition', () => {
    it('should call loggingService log with the passed in position', () => {
      const mockCurrentPosition = {
        xPosition: 1,
        yPosition: 1,
        direction: Direction.NORTH,
      };
      underTest.reportPosition(mockCurrentPosition);

      expect(mockLoggingService.log).toHaveBeenCalledTimes(1);
      expect(mockLoggingService.log).toHaveBeenCalledWith(`1,1,NORTH`);
    });

    it('should call loggingService log with the passed in position 2', () => {
      const mockCurrentPosition = {
        xPosition: 3,
        yPosition: 4,
        direction: Direction.SOUTH,
      };
      underTest.reportPosition(mockCurrentPosition);

      expect(mockLoggingService.log).toHaveBeenCalledTimes(1);
      expect(mockLoggingService.log).toHaveBeenCalledWith(`3,4,SOUTH`);
    });
  });

  describe('getBoardBoundaries', () => {
    it('should return the correct board boundaries', () => {
      expect(underTest.getBoardBoundaries()).toEqual({
        minXPosition: 0,
        maxXPosition: 4,
        minYPosition: 0,
        maxYPosition: 4,
      });
    });
  });
});
