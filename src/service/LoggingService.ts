import { ILoggingService } from './command/interface/ILoggingService';

export class LoggingService implements ILoggingService {
  log(text: string): void {
    console.log(text);
  }

  error(text: string): void {
    console.error(text);
  }
}
