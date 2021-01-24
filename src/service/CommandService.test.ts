import { CommandService } from './CommandService';
import { Command } from '../instance/Command';
import { INVALID_COMMAND_ERROR_MESSAGE } from '../Messages';
import { Direction } from '../instance/Direction';
import { mockView } from '../mocks/MockView';
import { mockBoundaryService } from '../mocks/MockBoundaryService';
import { mockRobotService } from '../mocks/MockRobotService';
import { mockCommandSanitisationService } from '../mocks/MockCommandSanitisationService';
import { mockLoggingService } from '../mocks/MockLoggingService';
import { Robot } from '../model/Robot';

describe('CommandService', () => {
  let underTest: CommandService;

  beforeEach(() => {
    jest.clearAllMocks();

    underTest = new CommandService(
      mockView,
      mockCommandSanitisationService,
      mockRobotService,
      mockBoundaryService,
      mockLoggingService,
    );
  });

  describe('processCommand', () => {
    it('should call placeCommand executeCommand if we parsed a place command', () => {
      const mockInput = 'PLACE 0,0,NORTH';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      const placeCommandSpy = jest.spyOn(
        underTest.placeCommand,
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(placeCommandSpy).toHaveBeenCalledWith({
        xPosition: 0,
        yPosition: 0,
        direction: Direction.NORTH,
      });
    });

    it('should not call LeftCommand.executeCommand if a command place has not been first executed', () => {
      const mockInput = 'LEFT';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      mockRobotService.getCurrentRobot.mockReturnValueOnce(undefined);
      const leftCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.LEFT],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(leftCommandSpy).toHaveBeenCalledTimes(0);
    });

    it('should call LeftCommand.executeCommand if a command place has already been executed', () => {
      const mockInput = 'LEFT';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      const mockRobot = new Robot({
        xPosition: 0,
        yPosition: 0,
        direction: Direction.NORTH,
      });
      mockRobotService.getCurrentRobot.mockReturnValueOnce(mockRobot);
      const leftCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.LEFT],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(leftCommandSpy).toHaveBeenCalledTimes(1);
      expect(leftCommandSpy).toHaveBeenCalledWith(mockRobot);
    });

    it('should not call RightCommand.executeCommand if a command place has not been first executed', () => {
      const mockInput = 'RIGHT';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      mockRobotService.getCurrentRobot.mockReturnValueOnce(undefined);
      const rightCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.RIGHT],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(rightCommandSpy).toHaveBeenCalledTimes(0);
    });

    it('should call RightCommand.executeCommand if a command place has already been executed', () => {
      const mockInput = 'RIGHT';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      const mockRobot = new Robot({
        xPosition: 0,
        yPosition: 0,
        direction: Direction.NORTH,
      });
      mockRobotService.getCurrentRobot.mockReturnValueOnce(mockRobot);
      const rightCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.RIGHT],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(rightCommandSpy).toHaveBeenCalledTimes(1);
      expect(rightCommandSpy).toHaveBeenCalledWith(mockRobot);
    });

    it('should not call MoveCommand.executeCommand if a command place has not been first executed', () => {
      const mockInput = 'MOVE';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      mockRobotService.getCurrentRobot.mockReturnValueOnce(undefined);
      const moveCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.MOVE],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(moveCommandSpy).toHaveBeenCalledTimes(0);
    });

    it('should call MoveCommand.executeCommand if a command place has already been executed', () => {
      const mockInput = 'MOVE';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      const mockRobot = new Robot({
        xPosition: 0,
        yPosition: 0,
        direction: Direction.NORTH,
      });
      mockRobotService.getCurrentRobot.mockReturnValueOnce(mockRobot);
      const moveCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.MOVE],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(moveCommandSpy).toHaveBeenCalledTimes(1);
      expect(moveCommandSpy).toHaveBeenCalledWith(mockRobot);
    });

    it('should not call ReportCommand.executeCommand if a command place has not been first executed', () => {
      const mockInput = 'REPORT';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      mockRobotService.getCurrentRobot.mockReturnValueOnce(undefined);
      const reportCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.REPORT],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(reportCommandSpy).toHaveBeenCalledTimes(0);
    });

    it('should call ReportCommand.executeCommand if a command place has already been executed', () => {
      const mockInput = 'REPORT';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );
      const mockRobot = new Robot({
        xPosition: 0,
        yPosition: 0,
        direction: Direction.NORTH,
      });
      mockRobotService.getCurrentRobot.mockReturnValueOnce(mockRobot);
      const reportCommandSpy = jest.spyOn(
        underTest.commandProcessorMap[Command.REPORT],
        'executeCommand',
      );
      mockBoundaryService.checkPositionWithinBoundary.mockReturnValueOnce(true);

      underTest.processCommand(mockInput);

      expect(reportCommandSpy).toHaveBeenCalledTimes(1);
      expect(reportCommandSpy).toHaveBeenCalledWith(mockRobot);
    });

    it('should throw an error if an unknown command was passed', () => {
      const mockInput = 'unknown command';
      mockCommandSanitisationService.sanitiseInput.mockReturnValueOnce(
        mockInput,
      );

      expect(() => {
        underTest.processCommand(mockInput);
      }).toThrowError(new Error('Could not find valid command'));
    });
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
