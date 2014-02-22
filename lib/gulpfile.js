var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

exports.compile = function() {
    gulp.src('./coffee/*.coffee')
        .pipe(watch(function(files) {
            return files.pipe(coffee({bare: true}).on('error', gutil.log))
                        .pipe(plumber())
                        .pipe(uglify({outSourceMap: false}))
                        .pipe(gulp.dest('./js/'))
        }));
    gulp.src('./scss/*.scss')
        .pipe(watch(function(files) {
            return files.pipe(sass({errLogToConsole: true}))
                        .pipe(plumber())
                        .pipe(gulp.dest('./css/'))
        }));
}