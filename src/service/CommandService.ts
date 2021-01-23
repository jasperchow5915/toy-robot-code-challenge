import { IView } from '../view/interface/IView';
import { CommandSanitisationService } from './CommandSanitisationService';
import { Command } from '../instance/Command';
import { INVALID_COMMAND_ERROR_MESSAGE } from '../Messages';
import { RobotService } from './RobotService';
import { PlaceCommand } from './command/PlaceCommand';
import { MoveCommand } from './command/MoveCommand';
import { LeftCommand } from './command/LeftCommand';
import { ReportCommand } from './command/ReportCommand';
import { RightCommand } from './command/RightCommand';
import { IRobotPosition } from '../model/interface/IRobotPosition';
import { Direction } from '../instance/Direction';
import { BoundaryService } from './BoundaryService';

export class CommandService {
  commandProcessorMap;
  placeCommand: PlaceCommand;

  constructor(
    view: IView,
    private commandSanitisationService: CommandSanitisationService,
    private robotService: RobotService,
    boundaryService: BoundaryService,
  ) {
    this.placeCommand = new PlaceCommand(view, boundaryService, robotService);
    this.commandProcessorMap = {
      [Command.MOVE]: new MoveCommand(view, boundaryService),
      [Command.LEFT]: new LeftCommand(),
      [Command.REPORT]: new ReportCommand(view),
      [Command.RIGHT]: new RightCommand(),
    };
  }

  processCommand(input: string): void {
    const sanitisedInput = this.commandSanitisationService.sanitiseInput(input);
    const commandToRun = this.getCommandToRun(sanitisedInput);
    const commandParameters = this.getRobotPositionFromCommandParameters(
      sanitisedInput,
    );

    switch (commandToRun) {
      case Command.LEFT:
      case Command.MOVE:
      case Command.REPORT:
      case Command.RIGHT:
        //discard command if not placed yet
        if (
          this.robotService.getCurrentRobot() === undefined ||
          this.robotService.getCurrentRobot().getCurrentPosition() === undefined
        ) {
          break;
        }
        this.commandProcessorMap[commandToRun].executeCommand(
          this.robotService.getCurrentRobot(),
        );
        break;

      case Command.PLACE:
        this.placeCommand.executeCommand(commandParameters);
        break;
      default:
        throw new Error('Not a known command');
    }
  }

  getRobotPositionFromCommandParameters(
    input: string,
  ): IRobotPosition | undefined {
    const parameters = input.split(' ');
    if (parameters.length !== 2) {
      return undefined;
    }
    const commandByPosition = parameters[1].split(',');
    //we expect three parameters to parse command parameters successfully
    if (commandByPosition.length !== 3) {
      return undefined;
    }

    const parsedDirection = Object.keys(Direction).find((direction) => {
      return direction === commandByPosition[2];
    });

    if (parsedDirection === undefined) {
      throw new Error('Could not understand direction of robot position');
    }

    const parsedXPosition = Number(commandByPosition[0]);
    if (isNaN(parsedXPosition)) {
      throw new Error('Could not parse x position of input');
    }

    const parsedYPosition = Number(commandByPosition[1]);
    if (isNaN(parsedYPosition)) {
      throw new Error('Could not parse y position of input');
    }

    return {
      xPosition: parsedXPosition,
      yPosition: parsedYPosition,
      direction: parsedDirection as Direction,
    };
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
