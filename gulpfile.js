var gulp=require('gulp')
var connect=require('gulp-connect')
//开发环境搭建
gulp.task('connect',function() {
	connect.server({
		root:'./src',
		livereload:true,
		port:'8080'
	})
})
gulp.task('reload',function() {
	gulp.src('./src/index.html')
		.pipe(connect.reload())
})
gulp.task('change',function() {
	gulp.watch('./src/**/*',['reload'])
})
gulp.task('server',['connect','change'])
