var assert = require('assert');

var lib = require('./lib');

describe('lib', function() {
  describe('#calculateCircleArea', function() {

    it('should return the correct value when the radius is positive', function() {
      assert.equal(lib.calculateCircleArea(5), 78.53981633974483);
    });

    it('should throw an error when the radius is negative', function() {
      assert.throws(function() {
        lib.calculateCircleArea(-1)
      }, Error);
    });
  });
});
