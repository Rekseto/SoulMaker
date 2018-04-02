import fs from 'fs';
import {promisify} from 'util';

const readdir  = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

class BlockManager {
  constructor() {
    this.blocks = new Map();
  }

  async loadBlocks(path) {
    try {
      const files = await readdir(path);
      const jsonFilePattern=/\.[json]+$/i;
      const fileReadOptions = {
          'encoding':'utf-8'
      };


      for(let file of files) {
        if (file.match(jsonFilePattern)) {
          const data = await readFile(`${path}/${file}`);
          let blockObj = JSON.parse(data);
          this.blocks.set(blockObj.id,blockObj);
        }
      }
    } catch(err) {
      throw err;
    }
  }

  getBlock(id) {
    return this.blocks.get(id);
  }
}


export default BlockManager;
