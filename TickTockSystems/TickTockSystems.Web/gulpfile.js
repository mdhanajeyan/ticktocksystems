/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");


var paths = {
    contentRoot: "./"
}

var cssSource = [
    "bower_components/bootstrap/dist/css/bootstrap.css",
    "bower_components/font-awesome/css/font-awesome.css"
];

var jsSource = [
    "bower_components/jquery/dist/jquery.js",
    "bower_components/bootstrap/dist/js/bootstrap.js",
    "bower_components/angular/angular.js",
    "bower_components/angular-route/angular-route.js"
];

var fontSource = ["bower_components/font-awesome/fonts/*"];
var glyphFontSource = ["bower_components/bootstrap/dist/fonts/*"];

paths.jsDest = paths.contentRoot + "Scripts/js";
paths.cssDest = paths.contentRoot + "Content/css";
paths.fontsDest = paths.contentRoot + "Content/css/fonts";
paths.glyphFontsDest = paths.contentRoot + "Content/fonts";

gulp.task('min:js', function () {
    return gulp.src(jsSource)
    .pipe(concat(paths.jsDest + "/min/site.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("."));
});

gulp.task('copy:js', function () {
    return gulp.src(jsSource)
    .pipe(gulp.dest(paths.jsDest));
});

gulp.task('min:css', function () {
    return gulp.src(cssSource)
    .pipe(concat(paths.cssDest + "/min/site.min.css"))
    .pipe(cssmin())
    .pipe(gulp.dest("."));
});

gulp.task('copy:css', function () {
    return gulp.src(cssSource)
     .pipe(gulp.dest(paths.cssDest));
});

gulp.task("copy:fonts", function () {
    return gulp.src(fontSource)
    .pipe(gulp.dest(paths.fontsDest));
});

gulp.task("copy:glyphfonts", function () {
    return gulp.src(glyphFontSource)
    .pipe(gulp.dest(paths.glyphFontsDest));
});

gulp.task("min", ["min:js", "min:css"]);
gulp.task("copy", ["copy:js", "copy:css", "copy:fonts", "copy:glyphfonts"]);