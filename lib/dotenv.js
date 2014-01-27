var fsReadFileAsType = require('fsreadfileastype');
var fs = require('fs');
var _ = require('underscore')

var DotEnv = function(options) {
  options || (options = {});
  this.filename = options.filename || '.env';
  this.fileDirectory = options.fileDirectory || '.';
  this.load();
}

_(DotEnv.prototype).extend({

  load: function() {
    // if the file does not exist
    if ( !fs.existsSync( this.filePath() ) ) {
      return false;
    }

    var data = fsReadFileAsType.sync(this.filePath(), 'shell');

    for (var key in data) {
      this.setEnvVar(key, data[key]);
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
