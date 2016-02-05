// this will run tests for all JS files under src/
// tests will be located under test/
module.exports = function karma(config){
	config.set({
		frameworks: ["browserify", "jasmine"],
		files: [
			"src/**/*.js",
			"test/**/*_spec.js"
		],
		eslint: {
	    	stopOnError: true,
	    	stopOnWarning: false
	  	},
		//linting will run before the tests
		preprocessors: {
			"test/**/*.js": ["eslint", "browserify"],
			"src/**/*.js": ["eslint", "browserify"]
		},
		browsers: ["PhantomJS"],
		browserify: {
			debug: true
		}
	})
}