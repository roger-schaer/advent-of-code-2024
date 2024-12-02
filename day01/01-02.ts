import { readPuzzleInput } from "../utils/read-input";
import { parseInputLines } from "../utils/parse-input";

// Read puzzle input
let input = readPuzzleInput("./input.txt");

// Parse input
let lines = parseInputLines(input);

const SEPARATOR = "   ";

// Create left & right lists
let [left, right]: [number[], number[]] = lines.reduce(
  (acc: [number[], number[]], curr) => {
    let [currL, currR] = curr.split(SEPARATOR);
    let [accL, accR] = acc;

    accL.push(+currL);
    accR.push(+currR);

    return acc;
  },
  [[], []]
);

// Sort lists
left = left.sort();
right = right.sort();

// Get similarities
let similarities = [];
for (let number of left) {
  let occurrences = right.reduce(
    (acc, curr) => (curr === number ? acc + 1 : acc),
    0
  );

  similarities.push(number * occurrences);
}

// Print sum of similarities
console.log(
  "The sum of similarities iiiis...",
  similarities.reduce((acc, curr) => acc + curr)
);
