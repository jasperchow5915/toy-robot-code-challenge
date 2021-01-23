import { BoundaryService } from './BoundaryService';
import { Direction } from '../instance/Direction';
import { mockView } from '../mocks/MockView';

describe('BoundaryService', () => {
  let underTest: BoundaryService;

  beforeEach(() => {
    underTest = new BoundaryService();
  });

  describe('checkPositionWithinBoundary', () => {
    it('should return true if position is within the boundary', () => {
      const mockRobotPosition = {
        xPosition: 1,
        yPosition: 1,
        direction: Direction.NORTH,
      };

      const result = underTest.checkPositionWithinBoundary(
        mockRobotPosition,
        mockView,
      );

      expect(result).toEqual(true);
    });

    it('should return false if out of bounds in the negative x position', () => {
      const mockRobotPosition = {
        xPosition: -1,
        yPosition: 1,
        direction: Direction.NORTH,
      };

      const result = underTest.checkPositionWithinBoundary(
        mockRobotPosition,
        mockView,
      );

      expect(result).toEqual(false);
    });

    it('should return false if out of bounds in the positive x position', () => {
      const mockRobotPosition = {
        xPosition: 6,
        yPosition: 1,
        direction: Direction.NORTH,
      };

      const result = underTest.checkPositionWithinBoundary(
        mockRobotPosition,
        mockView,
      );

      expect(result).toEqual(false);
    });

    it('should return false if out of bounds in the negative y position', () => {
      const mockRobotPosition = {
        xPosition: 1,
        yPosition: -1,
        direction: Direction.NORTH,
      };

      const result = underTest.checkPositionWithinBoundary(
        mockRobotPosition,
        mockView,
      );

      expect(result).toEqual(false);
    });

    it('should return false if out of bounds in the positive y position', () => {
      const mockRobotPosition = {
        xPosition: 1,
        yPosition: 7,
        direction: Direction.NORTH,
      };

      const result = underTest.checkPositionWithinBoundary(
        mockRobotPosition,
        mockView,
      );

      expect(result).toEqual(false);
    });
  });
});
