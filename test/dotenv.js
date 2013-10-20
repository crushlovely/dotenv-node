var assert = require('assert');
var should = require('should');

DotEnv = require('../lib/dotenv');

describe('dotenv', function() {

  describe('values', function(){
    it('is available', function() {
      var dotEnv = new DotEnv();

      dotEnv.values.FOO.should.eql('foo');
      dotEnv.values.BAR.should.eql('bar');
      dotEnv.values.BAZ.should.eql('baz');
    });
  });

  describe('.load()', function() {

    beforeEach(function(done){
      delete(process.env.FOO);
      delete(process.env.BAR);
      delete(process.env.BAZ);
      done();
    });

    describe('all values in the env file', function(){
      it('sets the environment variables defined in the file', function() {
        should.strictEqual(undefined, process.env.FOO)
        should.strictEqual(undefined, process.env.BAR)
        should.strictEqual(undefined, process.env.BAZ)

        var dotEnv = new DotEnv();
        dotEnv.load();

        process.env.FOO.should.eql("foo");
        process.env.BAR.should.eql("bar");
        process.env.BAZ.should.eql("baz");
      });
    });

    describe('with single key argument', function() {
      it('sets only the specified environment variables', function() {
        should.strictEqual(undefined, process.env.FOO)
        should.strictEqual(undefined, process.env.BAR)
        should.strictEqual(undefined, process.env.BAZ)

        var dotEnv = new DotEnv();
        dotEnv.load('FOO');

        process.env.FOO.should.eql("foo");
        should.strictEqual(undefined, process.env.BAR)
        should.strictEqual(undefined, process.env.BAZ)
      });
    });

    describe('with multiple key argument', function() {
      it('sets only the specified environment variables', function() {
        should.strictEqual(undefined, process.env.FOO)
        should.strictEqual(undefined, process.env.BAR)
        should.strictEqual(undefined, process.env.BAZ)

        var dotEnv = new DotEnv();
        dotEnv.load(['FOO', 'BAR']);

        process.env.FOO.should.eql("foo");
        process.env.BAR.should.eql("bar");
        should.strictEqual(undefined, process.env.BAZ)
      });
    });

  });

});
