import { CommandService } from '../service/CommandService';

export class CommandController {
  constructor(private commandService: CommandService) {}

  processCommand(input: string): void {
    return this.commandService.processCommand(input);
  }
}
