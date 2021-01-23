import { CommandService } from './CommandService';
import { Command } from '../instance/Command';
import { INVALID_COMMAND_ERROR_MESSAGE } from '../Messages';
import { Direction } from '../instance/Direction';
import { mockView } from '../mocks/MockView';
import { mockBoundaryService } from '../mocks/MockBoundaryService';
import { mockRobotService } from '../mocks/MockRobotService';
import { mockCommandSanitisationService } from '../mocks/MockCommandSanitisationService';

describe('CommandService', () => {
  let underTest: CommandService;

  beforeEach(() => {
    jest.resetAllMocks();

    underTest = new CommandService(
      mockView,
      mockCommandSanitisationService,
      mockRobotService,
      mockBoundaryService,
    );
  });

  describe('getRobotPositionFromCommandParameters', () => {
    it('should parse a valid input correctly and return a valid robot position', () => {
      const mockInput = 'PLACE 0,0,NORTH';

      const result = underTest.getRobotPositionFromCommandParameters(mockInput);

      expect(result).toEqual({
        xPosition: 0,
        yPosition: 0,
        direction: Direction.NORTH,
      });
    });

    it('should throw an error if an invalid x position was passed', () => {
      const mockInput = 'PLACE A,0,NORTH';

      expect(() => {
        underTest.getRobotPositionFromCommandParameters(mockInput);
      }).toThrowError(new Error('Could not parse x position of input'));
    });

    it('should throw an error if an invalid y position was passed', () => {
      const mockInput = 'PLACE 0,A,NORTH';

      expect(() => {
        underTest.getRobotPositionFromCommandParameters(mockInput);
      }).toThrowError(new Error('Could not parse y position of input'));
    });

    it('should throw an error if an invalid direction was passed', () => {
      const mockInput = 'PLACE 0,0,DON';

      expect(() => {
        underTest.getRobotPositionFromCommandParameters(mockInput);
      }).toThrowError(
        new Error('Could not understand direction of robot position'),
      );
    });
  });

  describe('getCommandToRun', () => {
    it('should return the PLACE command if parsed successfully', () => {
      const mockInput = 'PLACE 0,0,NORTH';

      const result = underTest.getCommandToRun(mockInput);

      expect(result).toEqual(Command.PLACE);
    });

    it('should return the MOVE command if parsed successfully', () => {
      const mockInput = 'MOVE';

      const result = underTest.getCommandToRun(mockInput);

      expect(result).toEqual(Command.MOVE);
    });

    it('should return the REPORT command if parsed successfully', () => {
      const mockInput = 'REPORT';

      const result = underTest.getCommandToRun(mockInput);

      expect(result).toEqual(Command.REPORT);
    });

    it('should return the LEFT command if parsed successfully', () => {
      const mockInput = 'LEFT';

      const result = underTest.getCommandToRun(mockInput);

      expect(result).toEqual(Command.LEFT);
    });

    it('should return the RIGHT command if parsed successfully', () => {
      const mockInput = 'RIGHT';

      const result = underTest.getCommandToRun(mockInput);

      expect(result).toEqual(Command.RIGHT);
    });

    it('should throw an error if it is an empty input', () => {
      const mockInput = '';

      expect(() => {
        underTest.getCommandToRun(mockInput);
      }).toThrowError(new Error(INVALID_COMMAND_ERROR_MESSAGE));
    });

    it('should throw an error if it is an invalid command', () => {
      const mockInput = 'INVALIDCOMMAND';

      expect(() => {
        underTest.getCommandToRun(mockInput);
      }).toThrowError(new Error(INVALID_COMMAND_ERROR_MESSAGE));
    });
  });
});
