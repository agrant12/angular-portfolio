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

/*
 *  CSS task
 */
gulp.task('styles', function () {
	gulp.src('./app/css/*.scss')
	.pipe(sass())
	.pipe(cmq({ beautify: false }))
	.pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
	//.pipe(gulp.dest('./assets/css'))
	.pipe(concat('app.css'))
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('./assets/css'));
});

/*
 *  JS task
 */
 gulp.task('scripts',function(){

});

/*
 *  WATCH tasks to serve up
 */
 gulp.task('watch', ['styles'], function() {
	//gulp.watch('${styles.src}/**/*.scss', ['styles']);
	//gulp.watch('${scripts.src}/**/*.js', ['scripts']);
});

/*
 *  DEFAULT tasks to serve up
 */
 gulp.task('default', ['styles']);

