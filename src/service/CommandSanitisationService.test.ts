import { CommandSanitisationService } from './CommandSanitisationService';

describe('CommandSanitisationService', () => {
  let underTest: CommandSanitisationService;

  beforeEach(() => {
    underTest = new CommandSanitisationService();
  });

  describe('sanitiseInput', () => {
    it('should read a string with extra spaces in it and clean them out', () => {
      const mockInput = ' PLACE 0,0,NORTH ';

      const result = underTest.sanitiseInput(mockInput);

      expect(result).toEqual('PLACE 0,0,NORTH');
    });

    it('should handle empty strings', () => {
      const mockInput = '';

      const result = underTest.sanitiseInput(mockInput);

      expect(result).toEqual('');
    });

    it('should convert lower case inputs to upper case', () => {
      const mockInput = 'place 0,0,north';

      const result = underTest.sanitiseInput(mockInput);

      expect(result).toEqual('PLACE 0,0,NORTH');
    });

    it('should remove additional spaces around the input', () => {
      const mockInput = ' PLACE 0 , 0 , NORTH ';

      const result = underTest.sanitiseInput(mockInput);

      expect(result).toEqual('PLACE 0,0,NORTH');
    });
  });
});
