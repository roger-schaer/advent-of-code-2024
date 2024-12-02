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

// Get distances
let distances = [];
for (let i = 0; i < left.length; i++) {
  distances.push(Math.abs(right[i] - left[i]));
}

// Print sum of distances
console.log(
  "The sum of distances iiiis...",
  distances.reduce((acc, curr) => acc + curr)
);
