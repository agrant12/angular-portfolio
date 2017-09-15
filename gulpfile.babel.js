'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	cssnano = require('gulp-cssnano'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	cmq = require('gulp-combine-mq'),
	rename = require('gulp-rename'),
	add = require('gulp-add-src');


var styles = {
	src:    '${dirs.src}/sass',
	build:  './app/css'
},

scripts = {
	src:    '${dirs.src}/scripts',
	build:  './app/js'
};

/*
 *  CSS task
 */
gulp.task('styles', function () {

});

/*
 *  JS task
 */
 gulp.task('scripts',function(){

});

/*
 *  WATCH tasks to serve up
 */
 gulp.task('watch', ['styles', 'scripts'], function() {
	gulp.watch('${styles.src}/**/*.scss', ['styles']);
	gulp.watch('${scripts.src}/**/*.js', ['scripts']);
});

/*
 *  DEFAULT tasks to serve up
 */
 gulp.task('default', ['styles', 'scripts', 'templates']);

