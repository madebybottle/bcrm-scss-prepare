// idea (and code) from:
// https://github.com/component/component/issues/274#issuecomment-14172698

var path = require('path'),
    fs = require('fs');

var compileFile = process.cwd() + '/build/pre-compile.scss';

module.exports = function(builder) {
  builder.hook('before styles', function(pkg, next) {
    var files = pkg.conf.files;
    if (typeof files !== 'undefined' && files !== null) {
      files = files.filter(function(file) {
        return path.extname(file) === '.scss' &&
          path.basename(file, '.scss') === 'index';
      });

      if (typeof files !== 'undefined' && files !== null) {
        files.slice().forEach(function(file) {
          var rel = path.join(pkg.conf.name, file);
          var importLine = '@import "' + rel + '";';
          fs.appendFileSync(compileFile, importLine);
        });
      }
    }

    next();
  });
};
