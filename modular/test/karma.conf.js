// Karma configuration
// Generated on Sun Jul 13 2014 09:06:13 GMT-0400 (EDT)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai', 'sinon'],
//        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'client/components/jquery/dist/jquery.js',
            'client/components/angular/angular.js',
            'test/bower_components/angular-mocks/angular-mocks.js',
            'client/components/angular-animate/angular-animate.js',
            'client/components/angular-route/angular-route.js',
            'client/components/angular-sanitize/angular-sanitize.js',
            'client/components/bootstrap/dist/js/bootstrap.js',
            'client/components/toastr/toastr.js',
            'client/components/moment/moment.js',
            'client/components/extras.angular.plus/ngplus-overlay.js',

            'client/app/app.module.js',
            'client/app/**/*.module.js',
            'client/app/**/*.js',

            /* JASMINE */
//            'test/spec.jasmine/**/matchers.js',
//            'test/spec.jasmine/**/specHelper.js',
//            'test/spec.jasmine/**/*[Ss]pec.js',
//            'test/spec.jasmine/**/sampleSpec.js'

            /* MOCHA */
            'test/spec.mocha/**/specHelper.js',
            'test/spec.mocha/**/*[Ss]pec.js',
            'test/spec.mocha/**/sampleSpec.js',
            'test/spec.mocha/**/simpleSpec.js'
        ],


        // list of files to exclude
        exclude: [
            'client/app/**/*spaghetti.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'client/app/**/*.js': 'coverage'

            // Can exclude files too
            // resources/javascript/**/!(Spec).js
        },


        // test results reporter to use
        // possible values: 'dots', 'progress', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        coverageReporter: {
            type: 'lcov',
            dir: 'test/coverage'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
        browsers: ['Chrome', 'PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
