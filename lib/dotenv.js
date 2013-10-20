var fsReadFileAsType = require('fsreadfileastype');
var _ = require('underscore')

var DotEnv = function(options) {
  options || (options = {});
  this.filename = options.filename || '.env';
  this.fileDirectory = options.fileDirectory || '.';
  this.getValues();

  return this
}

_(DotEnv.prototype).extend({

  getValues: function(){
    if (this.values) return this.values;

    var values = this.values = fsReadFileAsType.sync(this.filePath(), 'shell');
    return values;
  },

  load: function(keys) {
    if (!this.values) this.getValues();
    var values = this.values;

    if (!keys) keys = Object.keys(values);
    if (typeof keys === 'string') keys = [keys];

    var key;
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      this.setEnvVar(key, values[key]);
    }

    return true;
  },

  filePath: function() {
    return [this.fileDirectory, this.filename].join('/');
  },

  setEnvVar: function(key, value) {
    process.env[key] = value;
  }

});

module.exports = DotEnv;
