import { Direction } from '../../../instance/Direction';

export type IMovement = {
  [key in Direction]: {
    xIncrement: number;
    yIncrement: number;
  };
};
