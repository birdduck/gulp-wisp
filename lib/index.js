var gutil = require('gulp-util');
var through = require('through2');
var compiler = require('wisp/compiler');

const PLUGIN_NAME = 'gulp-wisp';

function wisp() {
    return through.obj(function (file, enc, callback) {
        var output;

        if (file.isNull()) {
          this.push(file);
          return callback();
        }

        if (file.isBuffer()) {
            output = compiler.compile(file.contents.toString());
            file.contents = new Buffer(output.code, enc);
            file.path = gutil.replaceExtension(file.path, '.js');
            this.push(file);
            return callback();
        }
    });
}

module.exports = wisp;