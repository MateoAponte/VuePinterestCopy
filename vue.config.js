const path = require("path");

module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "/VuePinterestCopy/build/" : "/",
	outputDir: path.resolve(__dirname, "./build"),
	assetsDir: "./",
};
