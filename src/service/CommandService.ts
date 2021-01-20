import { IConsoleLoggingView } from '../view/interface/IConsoleLoggingView';
import { CommandSanitisationService } from './CommandSanitisationService';
import { Command } from '../instance/Command';
import { INVALID_COMMAND_ERROR_MESSAGE } from '../Messages';
import { RobotService } from './RobotService';

export class CommandService {
  constructor(
    private consoleLoggingView: IConsoleLoggingView,
    private commandSanitisationService: CommandSanitisationService,
    private robotService: RobotService,
  ) {}

  processCommand(input: string) {
    const sanitisedInput = this.commandSanitisationService.sanitiseInput(input);
    const commandToRun = this.getCommandToRun(sanitisedInput);

    console.log(this.robotService);
    console.log(commandToRun);

    this.consoleLoggingView.reportPosition();
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
