/**
 * Created by Jeff on 2016/5/10.
 */
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

var pathJade = './views/**/*.jade';

gulp.task('watch', function() {

    gulp.watch(pathJade, function() {
        livereload();
    });
});


