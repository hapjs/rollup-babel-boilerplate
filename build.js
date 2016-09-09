var fs = require('fs');
var rollup = require('rollup').rollup;
var babel = require('rollup-plugin-babel');

rollup({
  entry: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}).then(function(bundle){
    return write('build/index.js', bundle.generate({
        format: 'umd',
        banner: ''
    }).code);
});

function write(dest, code){
    return new Promise(function(resolve, reject){
        fs.writeFile(dest, code, function(err){
            if(err) return reject(err);
            resolve();
        });
    });
}