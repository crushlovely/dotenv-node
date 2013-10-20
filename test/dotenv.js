var assert = require('assert');
var should = require('should');

DotEnv = require('../lib/dotenv');

describe('dotenv', function() {
  describe('.load()', function() {
    it('sets the environment variables defined in the file', function() {
      should.strictEqual(undefined, process.env.FOO)
      should.strictEqual(undefined, process.env.BAR)
      should.strictEqual(undefined, process.env.BAZ)

      new DotEnv();

      process.env.FOO.should.eql("foo");
      process.env.BAR.should.eql("bar");
      process.env.BAZ.should.eql("baz");
    });
  });
});
