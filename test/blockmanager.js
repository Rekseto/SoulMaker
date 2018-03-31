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

    it('size should increase', function(done) {
      const blocksPath = path.resolve('./test/blocks');

      const blockManager = new BlockManager();
      const oldSize = blockManager.blocks.size;
      blockManager.loadBlocks(blocksPath)
      .then(res => {
        if(blockManager.blocks.size > oldSize) {
          done()
        } else {
          done(new Error('Size didnt increase'));
        }
      })
      .catch(err => {
        done(err)
      });
    });
  });


  describe('#getBlock' , function() {
    it("should return block which is moveable (GRASS_BLOCK)", function (done) {
      const blocksPath = path.resolve('./test/blocks');
      const blockManager = new BlockManager();

      blockManager.loadBlocks(blocksPath)
      .then(res => {
        if(blockManager.getBlock(1).moveable === true) {
          done();
        } else {
          done(new Error("Found bad data at block with id 1"));
        }
      })
      .catch(err => {
        done(err)
      });
    });
  });
});
