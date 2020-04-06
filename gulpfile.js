let gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch');


gulp.task('style', function(){
	return gulp.src('./app/assets/src/sass/main.css')
	.pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/assets/css'))
	.pipe(browserSync.stream());
});


gulp.task('scripts', function(){
	console.log('you make scripts changes');
});

gulp.task('watch', function(){

	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});

	gulp.watch('./app/index.html', function(){
		browserSync.reload();
	});

	gulp.watch('./app/assets/src/**/*.css', gulp.series('style'));

});