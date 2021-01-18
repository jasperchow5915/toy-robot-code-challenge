import * as readline from 'readline';
import { CommandReaderService } from './service/CommandReaderService';

const commandReaderService = new CommandReaderService();

const readLineInterface = readline.createInterface(
  process.stdin,
  process.stdout,
);

readLineInterface.setPrompt('Welcome to the toy robot application\n');
readLineInterface.prompt();

readLineInterface
  .on('line', function (line) {
    commandReaderService.processCommand(line);
  })
  .on('close', function () {
    console.log('Have a great day!');
    process.exit(0);
  });
