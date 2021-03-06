const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/main.ts",
	},
	output: {
		library: "fireApp",
		libraryExport: "default",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.ts/,
				loader: "ts-loader",
			},
		],
	},
};