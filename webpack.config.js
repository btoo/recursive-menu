const path = require('path')

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  // devServer: {
  //   disableHostCheck: true
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-object-rest-spread']
            // presets: ['es2015'],
            // plugins: ['transform-runtime']
          }
        }]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  }
}
