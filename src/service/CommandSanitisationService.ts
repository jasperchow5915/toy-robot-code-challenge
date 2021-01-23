export class CommandSanitisationService {
  sanitiseInput(input: string): string {
    const inputWithoutLeadingAndTrailingSpaces = input.trim();
    const convertedUpperCaseInput = inputWithoutLeadingAndTrailingSpaces.toLocaleUpperCase();
    const inputWithoutAdditionalSpaces = this.removeAdditionalSpaces(
      convertedUpperCaseInput,
    );

    return inputWithoutAdditionalSpaces;
  }

  private removeAdditionalSpaces(input: string): string {
    const inputSplitBySpaces = input.split(' ');
    if (inputSplitBySpaces.length > 2) {
      const inputWithoutFirstElement = inputSplitBySpaces.slice(1).join('');
      return inputSplitBySpaces[0] + ' ' + inputWithoutFirstElement;
    }
    return input;
  }
}
