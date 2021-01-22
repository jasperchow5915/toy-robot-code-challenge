import { IView } from './interface/IView';
import { IBoardBoundaries } from './interface/IBoardBoundaries';

export class TableTopView implements IView {
  reportPosition(): void {
    console.log();
  }

  getBoardBoundaries(): IBoardBoundaries {
    return {
      maxXPosition: 4,
      maxYPosition: 4,
    };
  }
}
