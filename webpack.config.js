const path = require('path')

module.exports = {
  entry: {
    'bundle': path.resolve(__dirname, 'src/main.js')
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: './bundle.js',
    publicPath: '/dist'
  },
  devServer: {
    port: 3000
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
