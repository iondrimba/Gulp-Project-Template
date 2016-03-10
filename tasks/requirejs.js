var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var requirePaths = {
    jquery: 'node_modules/jquery/dist/jquery',
    backbone: 'node_modules/backbone/backbone',
    underscore: 'node_modules/underscore/underscore',
    views: 'src/scripts/app/views',
    vendors: 'src/scripts/vendors',
    routers: 'src/scripts/app/routers/router'
};

var paths = {
    scripts: ['src/scripts/**/.js', 'src/scripts/**/**/.js']
};


module.exports = function() {
    gulp.src('src/scripts/app/main.js')
        .pipe(requirejsOptimize(function(file) {
            return {
                name: 'src/scripts/app/main',
                out: 'public/scripts/app.js',
                baseUrl: '',
                optimizeAllPluginResources: true,
                noGlobal: true,
                optimize: 'uglify',
                mainConfigFile: 'src/scripts/app/main.js',
                allowSourceOverwrites: false,
                paths: requirePaths
            };
        }))
        .pipe(gulp.dest('./'));
};