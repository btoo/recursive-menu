const path = require('path')
    , {DefinePlugin} = require('webpack')
    , ClosureCompilerPlugin = require('webpack-closure-compiler')

module.exports = env => {
  
  let plugins = [
    new DefinePlugin({
      env: JSON.stringify({
        rootDirectory: require('complete-directory-tree')('src')
      })
    })
  ]
  env && env.production &&
    plugins.push(new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'SIMPLE'
      },
      concurrency: 3,
    }))

  return {
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
    plugins,
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
}