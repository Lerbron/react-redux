var webpack = require("webpack");
var path = require("path");
// var UglifyJsPlugin = require("UglifyJsPlugin");

module.exports = {
  entry: {
    index: './src/index',
    vendor: ['es6-promise', 'react', "react-dom", "react-router", "reqwest"]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "[name].js",
    publicPath: "dist/",
	  chunkFilename: '[name].chunk.js'  // 添加按需加载的文件名
  },
  module: {
    loaders: [{
        test: /\.(jpg|png|gif)$/,
        exclude: /node_modules/,
	      use: 'url-loader?limit=8192'
      },{
        test: /\.(js|jsx)$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["react", ["es2015", {"modules": false}]] }
        }],
      },{
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },{
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, exclude: /node_modules/, loader: "url-loader?limit=10000&minetype=application/font-woff"
      },{
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, exclude: /node_modules/, use: ["file-loader"]
      }]
  },
  resolve: {
      modules: [ path.resolve(__dirname, "src"), "node_modules" ],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        'reqwest': path.join(__dirname, 'node_modules/reqwest/reqwest.min.js')
      }
    },
    devtool: "source-map",
    plugins: [
      new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.optimize.CommonsChunkPlugin(['vendor'])
    ],
  watch: true
};
