import fs from "fs";
import {promisify} from "util";
import path from "path";

const readFile = promisify(fs.readFile);
const readDir = promisify(fs.readdir);
const parseItems = async function (itemsDIR) {
  try {
    const files = await readDir(itemsDIR);
    const items = [];
    for (let file of files) {
      const json = await readFile(path.resolve(itemsDIR, file));
      items.push(JSON.parse(json));
    }

    return items;
  } catch (err) {
    throw err;
  }
}

export {parseItems};
