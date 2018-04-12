import lineReader from "line-reader";
import {promisify} from "util";

const eachLine = promisify(lineReader.eachLine);

const parseMap = async function (file) {
  const parsedMap = [];
  await eachLine(file, function (line) {
    for (const block of line.split(" ")) {
      parsedMap.push(block);
    }
  });

  return parsedMap;
}

export {parseMap};
