const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
	entry: {
      app: './src/js/app/index.js'
    },
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'src')
	}
	
}