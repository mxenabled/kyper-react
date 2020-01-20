const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    TokenContext: './src/context/TokenContext.js',
    TokenProvider: './src/context/TokenProvider.js',
  },
  mode: 'development',
  output: {
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/, /dist/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: {
    // Don't bundle react or react-dom
    react: "react",
    "react-dom": "react-dom"
  }
}
