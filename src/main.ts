import * as readline from 'readline';
import { CommandService } from './service/CommandService';
import { TableTopView } from './view/TableTopView';

const tableTopView = new TableTopView();
const commandService = new CommandService(tableTopView);

const readLineInterface = readline.createInterface(
  process.stdin,
  process.stdout,
);

readLineInterface.setPrompt('Welcome to the toy robot application\n');
readLineInterface.prompt();

readLineInterface
  .on('line', function (line) {
    commandService.processCommand(line);
  })
  .on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
  });
