import * as readline from 'readline';
import { CommandService } from './service/CommandService';
import { TableTopView } from './view/TableTopView';
import { CommandSanitisationService } from './service/CommandSanitisationService';
import { CommandController } from './controller/CommandController';
import { RobotService } from './service/RobotService';

const tableTopView = new TableTopView();
const commandSanitisationService = new CommandSanitisationService();
const robotService = new RobotService();
const commandService = new CommandService(
  tableTopView,
  commandSanitisationService,
  robotService,
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
      console.error(`Error: ${error.message}`);
    }
  })
  .on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
  });
