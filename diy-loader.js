var diyLoader = {
	ejs: function(source, loaderOptions) {
		var ejsObj = require("ejs");
		var rootPath = __dirname;
		source = source.replace(/__ROOT__/g, rootPath);
		source = ejsObj.render(source, loaderOptions);
		return source;
	},

	replace: function(source, loaderOptions) {
		return source.replace(/wen/g, "W3School");
	}
}


module.exports = diyLoader