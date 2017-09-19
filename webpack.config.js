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
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: [require('babel-plugin-transform-object-rest-spread')]
            }
          }
        }, {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          }
        }
      ]
    }
  }
}