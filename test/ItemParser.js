import chai from "chai";
import path from 'path';

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
const request = chai.request;

import {parseItems} from '../core/parsers/ItemParser';


describe('ItemParser', function() {
  describe('#parseItems', function () {
    it('should succesfully parse items and add them to Array', function(done) {
      const itemsPath = path.resolve('./test/items/');
      parseItems(itemsPath).then(res => {
        done();
      }).catch(err => done(err))
    });



  });
});
