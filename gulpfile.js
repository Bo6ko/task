'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

var concat = require('gulp-concat');
var cssMin = require('gulp-css');

//compile 
gulp.task('sass', function () { 
	gulp.src('app/scss/app.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'));

});

//compile and watch 
gulp.task('sass:watch', function() {
	gulp.watch('app/scss/app.scss', ['sass']);

});

gulp.task('css', function () {
  
	gulp.src([
		'./app/css/app.css'
	])
	.pipe(concat('app.css'))
	.pipe(cssMin())
	.pipe(gulp.dest('./app/css/minify'))
	
  
});

gulp.task('scripts', function () {
  
	gulp.src([
		'./app/js/app.js'
	])
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./app/js/minify'))
	
  
});


//gulp.task('default', ['sass', 'css', 'scripts']);
gulp.task('default', function () {
	
});





