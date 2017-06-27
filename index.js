var loaderUtils = require("loader-utils");
var diyLoader = require("../../diy-loader");
module.exports = function(source, map) {
	//对source进行解析
	var loaderOptions = loaderUtils.parseQuery(this.query);
	if (loaderOptions && loaderOptions['methods']) {
		var methods = loaderOptions['methods'].split("|");
		var method;
		for (var i in methods) {
			method = methods[i];
			if (diyLoader[method]) {
				source = diyLoader[method](source);
			} else {
				console.log("diyLoader undefind:", method);
			}
		}
	}
	return source;

}