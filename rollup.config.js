import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

export default {
	entry: "src/scripts/app.js",
	dest: "dist/scripts/app.bundle.js",
	format: "iife",
	sourceMap: true,
	plugins: [
		nodeResolve(),
		commonjs({
			sourceMap: true
		}),
		babel({
			exclude: "node_modules/**"
		}),
		uglify({
			sourceMap: true
		})
	]
};