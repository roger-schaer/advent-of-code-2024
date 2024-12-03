import { readPuzzleInput } from "../utils/read-input";
import { parseInputLines } from "../utils/parse-input";

// Direction of the report
const DIRECTION = {
  INCREASING: "increasing",
  DECREASING: "decreasing",
} as const;

// Read puzzle input
let input = readPuzzleInput("./input.txt");

// Parse input
let lines = parseInputLines(input);

// Parse reports
let reports = lines.map((l) => l.split(" ").map((n) => +n));

// Get safe reports
let safeReports = reports.filter((r) => isSafeWithDampener(r));

console.log(`There are ${safeReports.length} safe reports`);

function isSafeWithDampener(r: number[], removeIndex = -1) {
  if (removeIndex >= r.length) return false;

  let dampenedRecord = removeIndex > -1 ? [...r].toSpliced(removeIndex, 1) : r;

  if (isSafe(dampenedRecord)) return true;

  return isSafeWithDampener(r, removeIndex + 1);
}

function isSafe(r: number[]) {
  let direction;
  for (let i = 1; i < r.length; i++) {
    let right = r[i];
    let left = r[i - 1];

    let difference = right - left;

    if (!isDifferenceSafe(difference)) return false;

    if (direction === undefined) {
      direction = difference > 0 ? DIRECTION.INCREASING : DIRECTION.DECREASING;
    } else {
      if (
        (difference > 0 && direction === DIRECTION.DECREASING) ||
        (difference < 0 && direction === DIRECTION.INCREASING)
      ) {
        return false;
      }
    }
  }

  return true;
}

function isDifferenceSafe(difference: number) {
  let differenceAbs = Math.abs(difference);

  return differenceAbs != 0 && differenceAbs <= 3;
}
