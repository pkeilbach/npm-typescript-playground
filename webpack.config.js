const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'playground.js',
    path: path.resolve(__dirname, 'lib'),
    globalObject: 'this',
    library: {
        name: 'npmTypescriptPlayground',
        type: 'umd'
    }
  },
};
