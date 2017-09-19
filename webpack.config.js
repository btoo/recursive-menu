const path = require('path')
    , ExtractTextPlugin = require('extract-text-webpack-plugin')
    , UglifyESPlugin = require('uglifyes-webpack-plugin')

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
  plugins: [
    new UglifyESPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new ExtractTextPlugin({
      filename: `style.css`
    }),
  ],
  module: {
    rules: [{
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
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
        }
      }
    }]
  }
}
