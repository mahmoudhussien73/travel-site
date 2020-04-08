let gulp = require('gulp'),
postCsss = require('gulp-postcss'),
autoPreFixers = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create(),
mixins = require('postcss-mixins'),
cssNano = require('cssnano'),
watch = require('gulp-watch');


gulp.task('style', function(){
	return gulp.src('./app/assets/src/sass/main.css')
	.pipe(postCsss([cssImport, mixins, cssvars, nested, autoPreFixers("last 5 versions"), cssNano]))
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