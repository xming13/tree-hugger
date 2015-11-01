'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var filesize = require('gulp-filesize');

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('app'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    gulp.watch([
            'app/*.html',
            'app/styles/**/*.css',
            'app/scripts/**/*.js'
        ]).on('change', function (file) {
            server.changed(file.path);
        });
});

gulp.task('js', function () {
    gulp.src(['app/scripts/TweenMax-1.18.min.js', 'app/scripts/popcorn-complete.min.js', 'app/scripts/**/*.js', '!app/scripts/app.js', '!app/scripts/app.min.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/scripts'))
        .pipe(filesize())
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('app/scripts'))
        .pipe(filesize());
});

gulp.task('css', function() {
    gulp.src(['app/styles/**/*.css', '!app/styles/app.css', '!app/styles/app.min.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('app/styles'))
        .pipe(filesize())
        .pipe(minifyCss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('app/styles'))
        .pipe(filesize());
});

gulp.task('build', ['js', 'css']);