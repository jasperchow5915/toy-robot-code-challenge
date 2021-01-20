import { IConsoleLoggingView } from '../view/interface/IConsoleLoggingView';
import { CommandSanitisationService } from './CommandSanitisationService';
import { Command } from '../instance/Command';
import { INVALID_COMMAND_ERROR_MESSAGE } from '../Messages';
import { RobotService } from './RobotService';
import { PlaceCommand } from './command/PlaceCommand';
import { MoveCommand } from './command/MoveCommand';
import { LeftCommand } from './command/LeftCommand';
import { ReportCommand } from './command/ReportCommand';
import { RightCommand } from './command/RightCommand';

export class CommandService {
  commandProcessorMap;

  constructor(
    private consoleLoggingView: IConsoleLoggingView,
    private commandSanitisationService: CommandSanitisationService,
    private robotService: RobotService,
  ) {
    this.commandProcessorMap = {
      [Command.PLACE]: new PlaceCommand(),
      [Command.MOVE]: new MoveCommand(),
      [Command.LEFT]: new LeftCommand(),
      [Command.REPORT]: new ReportCommand(),
      [Command.RIGHT]: new RightCommand(),
    };
  }

  processCommand(input: string): void {
    const sanitisedInput = this.commandSanitisationService.sanitiseInput(input);
    const commandToRun = this.getCommandToRun(sanitisedInput);
    this.commandProcessorMap[commandToRun].executeCommand(
      this.robotService.getCurrentRobot(),
    );
  }

  getCommandToRun(input: string): Command {
    const inputSplitBySpace = input.split(' ');
    if (inputSplitBySpace.length < 1) {
      throw new Error(INVALID_COMMAND_ERROR_MESSAGE);
    }

    const actualCommand = inputSplitBySpace[0];

    for (const commandKey of Object.keys(Command)) {
      if (commandKey === actualCommand) {
        return <Command>commandKey;
      }
    }

    throw new Error(INVALID_COMMAND_ERROR_MESSAGE);
  }
}
