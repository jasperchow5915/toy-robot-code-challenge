export class CommandSanitisationService {
  sanitiseInput(input: string): string {
    const inputWithoutLeadingAndTrailingSpaces = input.trim();
    const convertedUpperCaseInput = inputWithoutLeadingAndTrailingSpaces.toLocaleUpperCase();

    return convertedUpperCaseInput;
  }
}
