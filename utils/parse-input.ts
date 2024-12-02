export const parseInputLines = (text: string): string[] =>
  text.replaceAll("\r\n", "\n").split("\n");
