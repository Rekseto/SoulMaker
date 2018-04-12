import chai from "chai";
import path from 'path';

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
const request = chai.request;

import {parseMap} from '../core/parsers/MapParser';


describe('MapParser', function() {
  describe('#parseMap', function () {
    it('should succesfully parse map to array of 100 elements ', function(done) {
      const regionsPath = path.resolve('./test/regions/start.map');
      parseMap(regionsPath).then(res => {
        done();
      }).catch(err => done(err))
    });


    it('should throw error when wrong path given ', function(done) {
      const regionsPath = path.resolve('./wrong/path');
      parseMap(regionsPath).then(res => {
        done("An error has been not occured");
      }).catch(err => done())
    });
  });
});
