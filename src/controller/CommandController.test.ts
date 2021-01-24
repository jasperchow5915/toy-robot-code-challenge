import { CommandController } from './CommandController';
import { mockCommandService } from '../mocks/MockCommandService';

describe('CommandController', () => {
  let underTest: CommandController;

  beforeEach(() => {
    jest.clearAllMocks();
    underTest = new CommandController(mockCommandService);
  });

  it('should delegate to commandService.processCommand', () => {
    const mockInput = 'mock input';
    underTest.processCommand(mockInput);

    expect(mockCommandService.processCommand).toHaveBeenCalledTimes(1);
    expect(mockCommandService.processCommand).toHaveBeenCalledWith(mockInput);
  });
});
