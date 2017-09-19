const path = require('path')
    , ClosureCompilerPlugin = require('webpack-closure-compiler')

module.exports = {
  entry: './src/main.js',
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
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'SIMPLE'
      },
      concurrency: 3,
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: [path.resolve(__dirname, 'app/src')], // make src the root of transpiling, so if your problematic code is under anywhere in src/ Babel will pick it up.
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            ["es2015", {"modules": false}]
          ],
          plugins: ['transform-runtime', 'transform-object-rest-spread']
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
