import { readPuzzleInput } from "../utils/read-input";
import { parseInputLines } from "../utils/parse-input";

// Read puzzle input
let input = readPuzzleInput("./input.txt");

// Parse input
let lines = parseInputLines(input);

let regexp =
  /(?:mul\((?<operand1>\d{1,3}),(?<operand2>(\d{1,3}))\))|(?<do>do\(\))|(?<dont>don't\(\))/gm;

let enabled = true;

let total = lines.reduce((acc, curr) => {
  let matches = curr.matchAll(regexp);

  if (!matches) return acc;

  return (
    acc +
    matches.reduce((total, match) => {
      if (match.groups) {
        if (match.groups.do) {
          enabled = true;
        } else if (match.groups.dont) {
          enabled = false;
        }

        if (enabled) {
          let { operand1, operand2 } = match.groups;
          return operand1 ? total + +operand1 * +operand2 : total;
        } else {
          return total;
        }
      }

      return total;
    }, 0)
  );
}, 0);

console.log("total", total);
