let gulp = require('gulp'),
watch = require('gulp-watch');




gulp.task('html', function(){
	console.log('you make changes to html file');
});




gulp.task('style', function(){
	console.log('you make changes to css file');
});


gulp.task('scripts', function(){
	console.log('you make scripts changes');
});

gulp.task('watch', function(){
	gulp.watch('./app/index.html', gulp.series('html'));
	gulp.watch('./app/assets/css/*.css', gulp.series('style'));
});