const fly = require("fly");

const paths = {
	scripts: "src/js/*.js",
	styles: ["src/styles/*.css", "src/styles/*.scss"],
	images: "src/img/",
	pug: "src/pug/*.pug",
	json: "./src/pug/globals.json",
	cname: "src/CNAME"
}

module.exports = {
	*clear(fly) {
		yield fly.clear("dist");
	},
	*pug(fly) {
		yield fly.source(paths.pug).pug(require(paths.json)).target("dist");
	},
	*scripts(fly) {
		yield fly.source(paths.scripts).browserify({
			transform: [
				require("babelify").configure({
					presets: ["es2015"]
				})
			]
		}).uglify().target("dist/js/");
	},
	*styles(fly) {
		yield fly.source(paths.styles).sass({ outputStyle: "compressed" }).target("dist/css/");
	},
	*images(fly) {
		yield fly.source("src/img/*.{png,jpg,jpeg,svg,ico}").imagemin().target("dist/img/");
	},
	*cname(fly) {
		yield fly.source(paths.cname).target("dist");
	},
	*build(fly) {
		yield fly.serial(["clear", "pug", "cname", "images", "scripts", "styles"]);
	}
}