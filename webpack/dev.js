const webpack = require('webpack');
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
*/
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//load stats configuration
const { stats } = require('./stats');
//construct dist folder location
//note: we go up from webpack folder into dist
const dist = path.resolve(__dirname, '../dist');
//console.log("dist...", dist);

module.exports = {
	mode: 'development',
	entry:{		
		index: './src/main.js'
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: dist
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['env',"stage-2"]
			}
		},{
			//SCSS configuration with extract css
			test: /\.(scss|css)$/,
			use: [/*{
					loader: 'vue-style-loader'
				}*/
				//extract css into separate file
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader'
				},{
					loader: 'sass-loader'
			}]
		},{
			/* config.module.rule('fonts') */		
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
			use: [
				/* config.module.rule('fonts').use('url-loader') */
				{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'fonts/[name].[ext]'
					}
				}
			]
		},{
			/* config.module.rule('images') */
			test: /\.(svg|png|jpe?g|gif|webp)(\?.*)?$/,
			use: [
				/* config.module.rule('images').use('url-loader') */
				{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'img/[name].[ext]'
					}
				}
			]
		},{
			/* config.module.rule('media') */
			test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
			use: [
				/* config.module.rule('media').use('url-loader') */
				{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'media/[name].[ext]'
					}
				}
			]
		}]
	},

	plugins: [
		// initialize Vuejs plugin
		new VueLoaderPlugin(),
		//copy index html
		//https://webpack.js.org/plugins/html-webpack-plugin/
		new HtmlWebpackPlugin({
			filename: 'index.html',
      template: './src/index.html',
      inject: true
		}),
		//old extract text plugin to extract css
		//new ExtractTextPlugin('[name].css')		
		new MiniCssExtractPlugin({
      // Options similar to webpackOptions.output
      // both options are optional
      filename: "[name].css",
     	chunkFilename: "[id].css"
		}),
		//copy assets
		//https://webpack.js.org/plugins/copy-webpack-plugin/
		new CopyWebpackPlugin([						
			//copy all files from assets dir to root
			//note: when no files folder is not copied!
			'./assets/'
		])
	],
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			minChunks: 1,
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	},	
	/**
	 * Display stats, see link below for complete list
	 * https://webpack.js.org/configuration/stats/#stats
	 */
	stats: stats,
	/**
	 * Webpack dev server setup
	 */
	devtool: 'inline-source-map',
	devServer:{				
		port: 4200,
		stats: stats,
	},
};
