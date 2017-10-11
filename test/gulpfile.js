var gulp=require("gulp");
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();


var root = '/',
    dist = '../dist/';



//清除
gulp.task('clean', function () {
    // return 清楚干净后的数据流(Stream)
    return gulp.src(dist, {read: false})
        .pipe(clean({force: true})).on('end', function(){
            console.log("clean over");
    });
});


// 测试模式
gulp.task('test', function() {
    console.log('test in port 80');
    browserSync.init({
        server: {
            baseDir: dist,
            directory: true,
        },
        port: 80,

    });
});