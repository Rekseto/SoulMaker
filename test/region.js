import chai from "chai";

import Region from '../core/map/Region';

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;
const request = chai.request;


describe('Region', function() {
  describe('#canMove', function() {
    const region = new Region(5,5);
    it('should return true when in range of region', function() {
      assert.equal(region.canMove(3,3),true);
    });
    it('should return false when out of range of region' , function () {
        assert.equal(region.canMove(12,3),false);
    });
  });
});
