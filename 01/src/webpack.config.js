const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'production';

const config = {
  mode: process.env.NODE_ENV,
  entry: {
    index: './ts/index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../public/assets/js/')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './ts')
    },
    extensions: ['.js', '.ts']
  }
};

if (isDevelopment) {
  config.optimization = {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  };
}

module.exports = config;
