import * as fs from "fs";

export const readPuzzleInput = (inputFilePath: string): string => {
  let input = fs.readFileSync(inputFilePath, { encoding: "utf-8" }).toString();
  return input.trim();
};

export const readPuzzleInputRaw = (inputFilePath: string): string => {
  let input = fs.readFileSync(inputFilePath, { encoding: "utf-8" }).toString();
  return input;
};
