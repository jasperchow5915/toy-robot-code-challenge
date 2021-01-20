import { CommandService } from './CommandService';
import { IConsoleLoggingView } from '../view/interface/IConsoleLoggingView';
import { CommandSanitisationService } from './CommandSanitisationService';
import { RobotService } from './RobotService';
import { Command } from '../instance/Command';
import { INVALID_COMMAND_ERROR_MESSAGE } from '../Messages';

describe('CommandService', () => {
  let underTest: CommandService;

  let mockConsoleLoggingView: IConsoleLoggingView;
  let mockCommandSanitisationService: CommandSanitisationService;
  let mockRobotService: RobotService;

  beforeEach(() => {
    mockConsoleLoggingView = {
      reportPosition: jest.fn(() => undefined),
    };
    mockCommandSanitisationService = {
      sanitiseInput: jest.fn(() => undefined),
    };
    mockRobotService = {
      createNewRobot: jest.fn(() => undefined),
    };
    underTest = new CommandService(
      mockConsoleLoggingView,
      mockCommandSanitisationService,
      mockRobotService,
    );
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
