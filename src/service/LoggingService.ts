export class LoggingService {
  log(text: string): void {
    console.log(text);
  }

  error(text: string): void {
    console.error(text);
  }
}
