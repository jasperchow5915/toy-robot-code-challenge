export interface ILoggingService {
  log: (text: string) => void;
  error: (text: string) => void;
}
