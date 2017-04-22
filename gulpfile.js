const gulp = require("gulp");
const clean = require("gulp-clean");
const pug = require("gulp-pug");
const rollup = require("gulp-rollup-stream");
const babel = require("rollup-plugin-babel");
const uglify = require("rollup-plugin-uglify");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const surge = require("gulp-surge");
const runSequence = require("run-sequence");

const paths = {
	src: {
		root: "src",
		scripts: "src/js/*.js",
		styles: ["src/styles/*.css", "src/styles/*.scss"],
		images: "src/img/*.{png,jpg,jpeg,svg,gif,ico}",
		pug: "src/pug/*.pug",
		json: "./src/pug/globals.json",
		cname: "src/CNAME"
	},
	dist: {
		root: "dist/",
		styles: "dist/css",
		images: "dist/img",
		scripts: "dist/js"
	}
}

gulp.task("clean", () => {
	return gulp.src(paths.dist.root, { read: false })
		.pipe(clean());
});

gulp.task("pug", () => {
	return gulp.src(paths.src.pug)
		.pipe(pug({
			data: require(paths.src.json)
		}))
		.pipe(gulp.dest(paths.dist.root));
});

gulp.task("scripts", () => {
	return gulp.src(paths.src.scripts)
		.pipe(rollup({
			format: "cjs",
			plugins: [
				babel({
					babelrc: false,
					presets: ["es2015"]
				}),
				uglify()
			]
		}))
		.pipe(gulp.dest(paths.dist.root));
});

gulp.task("styles", () => {
	return gulp.src(paths.src.styles)
		.pipe(sass({
			outputStyle: "compressed",
			includePaths: ["./node_modules"]
		}))
		.pipe(autoprefixer({
			browsers: ["last 3 versions"]
		}))
		.pipe(gulp.dest(paths.dist.styles));
});

gulp.task("images", () => {
	return gulp.src(paths.src.images)
		.pipe(imagemin())
		.pipe(gulp.dest(paths.dist.images));
});

gulp.task("build", (callback) => {
	runSequence("clean", "pug", "scripts", "styles", "images", callback);
});

gulp.task("deploy", () => {
	runSequence("build", () => {
		return surge({
			project: "./dist",
			domain: "berenson.me"
		});
	});
})