let gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
browserSync = require('browser-sync').create(),
mixins = require('postcss-mixins'),
watch = require('gulp-watch');


gulp.task('style', function(){
	return gulp.src('./app/assets/src/sass/main.css')
	.pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
	.on('error', function(errorinfo){
		console.log(errorinfo);
		this.emit('end');
	})
	.pipe(gulp.dest('./app/assets/css'))
	.pipe(browserSync.stream());
});



gulp.task('html', function(){
    return gulp.src('./app/index.html')
        .pipe(browserSync.reload());
});


gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: 'app'
		}
	});

	gulp.watch('./app/index.html', gulp.series('html'));

	gulp.watch('./app/assets/src/**/*.css', gulp.series('style'));

});