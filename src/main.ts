import * as readline from 'readline';
import { CommandService } from './service/CommandService';
import { TableTopView } from './view/TableTopView';
import { CommandSanitisationService } from './service/CommandSanitisationService';
import { CommandController } from './controller/CommandController';
import { RobotService } from './service/RobotService';
import { BoundaryService } from './service/BoundaryService';
import { LoggingService } from './service/LoggingService';

const loggingService = new LoggingService();
const tableTopView = new TableTopView(loggingService);
const commandSanitisationService = new CommandSanitisationService();
const robotService = new RobotService();
const boundaryService = new BoundaryService();
const commandService = new CommandService(
  tableTopView,
  commandSanitisationService,
  robotService,
  boundaryService,
  loggingService,
);
const commandController = new CommandController(commandService);

const readLineInterface = readline.createInterface(
  process.stdin,
  process.stdout,
);

readLineInterface.setPrompt('Welcome to the toy robot application\n');
readLineInterface.prompt();

readLineInterface
  .on('line', function (line) {
    try {
      commandController.processCommand(line);
    } catch (error) {
      loggingService.error(`Error: ${error.message}`);
    }
  })
  .on('close', function () {
    process.exit(0);
  });
