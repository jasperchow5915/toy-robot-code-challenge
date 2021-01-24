import { LoggingService } from './LoggingService';

describe('LoggingService', () => {
  let underTest: LoggingService;

  const mockInput = 'mock-input';

  beforeEach(() => {
    jest.clearAllMocks();
    underTest = new LoggingService();
  });

  describe('log', () => {
    it('should call js console.log', () => {
      const logSpy = jest.spyOn(global.console, 'log');

      underTest.log(mockInput);

      expect(logSpy).toHaveBeenCalledWith(mockInput);
    });
  });

  describe('error', () => {
    it('should call js console.error', () => {
      const errorSpy = jest.spyOn(global.console, 'error');

      underTest.error(mockInput);

      expect(errorSpy).toHaveBeenCalledWith(mockInput);
    });
  });
});
