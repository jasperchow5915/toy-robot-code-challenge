export const mockView = {
  reportPosition: jest.fn(() => undefined),
  getBoardBoundaries: jest.fn(() => {
    return {
      minXPosition: 0,
      maxXPosition: 4,
      minYPosition: 0,
      maxYPosition: 4,
    };
  }),
  displayError: jest.fn(() => undefined),
};
