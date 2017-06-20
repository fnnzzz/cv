const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, './dist')
const autoprefixer = require('autoprefixer')

const webpackConfig = {
	entry: {
		app: [
			'react-hot-loader/patch',
			path.resolve(__dirname, './src/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					{ 
						loader: 'postcss-loader', 
						options: { plugins: () => [autoprefixer] }
					},
					'sass-loader'
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/assets/'),
				use: 'url-loader?limit=10000&name=assets/[name].[ext]'
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: 'file-loader?name=assets/fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/assets/index.html'),
			filename: 'index.html',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 8080,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '0.0.0.0'
	}
}


// for production
if( process.env.NODE_ENV ) {
	webpackConfig.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				unused    : true,
				dead_code : true,
				warnings  : false
			}
		}),
		new webpack.optimize.AggressiveMergingPlugin()
	)
}

module.exports = webpackConfig