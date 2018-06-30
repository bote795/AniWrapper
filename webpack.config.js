const path = require('path');
const R = require('ramda');

const web = {
  entry: ['babel-polyfill', './lib/Anilist.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Anilist',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};


const nodeSpecificFields = {
  entry: ['babel-polyfill', './lib/Anilist.js'],
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'anilist/node.js'
  }
};
const nodeVersion = R.mergeDeepRight(web, nodeSpecificFields);

module.exports = [web, nodeVersion];
