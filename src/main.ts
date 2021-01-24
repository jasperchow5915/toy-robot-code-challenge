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
);
const commandController = new CommandController(commandService);

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLineInterface.setPrompt('Enter a command\n');
readLineInterface.prompt();
// https://github.com/nodejs/node/issues/12606
readLineInterface.setPrompt('');

readLineInterface
  .on('line', function (line) {
    commandController.processCommand(line);
  })
  .on('close', function () {
    process.exit(0);
  });
