import { readfileToArray } from "../helpers.js";
const values = readfileToArray("input.txt");

//const numberReg = /[0-9]/g;
const numberReg = /[1-9]|one|two|three|four|five|six|seven|eight|nine/gm;

const result = [];

for (const value of values) {
  solveOneInput(value);
}
export function solveOneInput(value) {
  const res = match(value);

  const x = parseInt(`${toNumber(res.first)}` + `${toNumber(res.last)}`);

  result.push(x);

  return x;
}

function match(str) {
  var m,
    res = [];
  while ((m = numberReg.exec(str))) {
    res.push(m[0]);
    numberReg.lastIndex = m.index + 1; // <- Important
  }
  return { first: res[0], last: res[res.length - 1] };
}

let sum = 0;
result.forEach((num) => (sum += num));
console.log("Answer %f", sum);
function toNumber(numberAsLetters) {
  switch (numberAsLetters) {
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "four":
      return 4;
    case "five":
      return 5;
    case "six":
      return 6;
    case "seven":
      return 7;
    case "eight":
      return 8;
    case "nine":
      return 9;
    default:
      return parseInt(numberAsLetters);
  }
}
