import { Robot } from '../../../model/Robot';

export interface ICommand {
  executeCommand: (robot: Robot) => void;
}
