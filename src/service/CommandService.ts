import { IConsoleLoggingView } from '../view/interface/IConsoleLoggingView';

export class CommandService {
  constructor(private consoleLoggingView: IConsoleLoggingView) {}

  processCommand(input: string) {
    console.log('input', input);

    this.consoleLoggingView.reportPosition();
  }
}
