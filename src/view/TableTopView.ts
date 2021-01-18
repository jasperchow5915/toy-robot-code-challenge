import { IConsoleLoggingView } from './interface/IConsoleLoggingView';

export class TableTopView implements IConsoleLoggingView {
  dimensions = {
    min: 4,
    max: 4,
  };

  reportPosition(): void {
    console.log();
  }
}
