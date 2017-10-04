const sourceMaps = require('rollup-plugin-sourcemaps');
const packageJSON = require('./package.json');

export default {
    entry: 'dist/index.js',
    targets:[
        {
            dest: packageJSON.main,
            format: 'umd',
            moduleName: 'typeScriptProLibraryProject'
        }
    ],
    sourcemap:true,
    plugins:[
        sourceMaps()
    ]
}