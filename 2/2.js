import { readfileToArray } from "../helpers.js";
const splitRegexp = /:|Game /;
const numReg = /[0-9]+/gm;
const redReg = /([0-9]+.red)|([0-9]+.green)|([0-9]+.blue)/gm;

const values = readfileToArray("input.txt");
const splittedValues = values.map((x) => x.split(splitRegexp));
// 12 red cubes, 13 green cubes, and 14 blue cubes
let sum = 0;
for (const arr of splittedValues) {
  const id = arr[1];
  const it = arr[2].match(redReg);
  const numberOfColors = parseNumber([...it]);
  const maxReds = Math.max(...numberOfColors.reds);
  const maxGreens = Math.max(...numberOfColors.greens);
  const maxBlues = Math.max(...numberOfColors.blues);
  const power = maxReds * maxGreens * maxBlues;
  sum += power;
}

// input = ['4 red', '3 blue'] etc
function parseNumber(input) {
  const result = { reds: [], greens: [], blues: [] };

  for (const value of input) {
    console.log(value);
    const parsedValue = parseInt(value.match(numReg));
    console.log(parsedValue);
    if (value.includes("green")) {
      result.greens.push(parsedValue);
    } else if (value.includes("blue")) {
      result.blues.push(parsedValue);
    } else {
      result.reds.push(parsedValue);
    }
  }
  return result;
}
console.log("Answer ", sum);
