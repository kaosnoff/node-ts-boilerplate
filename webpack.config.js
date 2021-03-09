const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');
const webpack = require('webpack');
const {
	NODE_ENV = 'production',
} = process.env;
module.exports = {
	entry: './src/index.ts',
	mode: NODE_ENV,
	target: 'node',
	watch: true,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					'ts-loader'
				]
			}
		]
	},
	externals: [ nodeExternals() ],
	watch: NODE_ENV === 'development',
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: ".env", to: "" },
			],
		})
	]
}