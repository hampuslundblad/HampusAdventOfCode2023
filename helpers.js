import * as fs from "fs";

export function readfileToArray(filePath) {
  var text = fs.readFileSync(filePath).toString("utf-8");
  const arr = text.split(/\r?\n/);
  return arr;
}
export function writeToFile(filePath, data) {
  // Write data in 'Output.txt' .
  fs.writeFile(filePath, data, (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}
