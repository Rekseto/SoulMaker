import chai from "chai";
import path from 'path';

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
const request = chai.request;

import BlockManager from '../core/BlockManager';


describe('BlockManager', function() {
  describe('#loadBlocks', function() {
    it('should throw error when wrong path given', function(done) {
      const blocksPath = path.resolve('./blocksas');

      const blockManager = new BlockManager();
      blockManager.loadBlocks(blocksPath)
      .then(res => done("Error has been not occured"))
      .catch(err => done())
    });
  });
});
