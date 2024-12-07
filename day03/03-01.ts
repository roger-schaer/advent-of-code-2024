import { readPuzzleInput } from "../utils/read-input";
import { parseInputLines } from "../utils/parse-input";

// Read puzzle input
let input = readPuzzleInput("./input.txt");

// Parse input
let lines = parseInputLines(input);

let regexp = /mul\((?<operand1>\d{1,3}),(?<operand2>(\d{1,3}))\)/gm;

let total = lines.reduce((acc, curr) => {
  let matches = curr.matchAll(regexp);

  if (!matches) return acc;

  return (
    acc +
    matches.reduce((total, match) => {
      if (match.groups) {
        let { operand1, operand2 } = match.groups;
        return total + +operand1 * +operand2;
      }

      return total;
    }, 0)
  );
}, 0);

console.log("total", total);
