let project_folder = "dist"; /*папка с результатом*/
let source_folder = "src";   /*папка с исходными файлами*/

let path = {
    build: {
        html: project_folder + "/",
        html_parts: project_folder + "/parts/",
        vue: project_folder + "/",
        sass: project_folder + "/sass/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: source_folder + "/index.php",
        html_parts: source_folder + "/parts/*.html",
        vue: source_folder + "/**/tweet-form.vue",
        sass: source_folder + "/sass/*.sass",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/*.{jpg,png,svg,gif,ico,webp,mp4}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.php",
        html_parts: source_folder + "/parts/*.html",
        vue: source_folder + "/**/tweet-form.vue",
        sass: source_folder + "/sass/*.sass",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/*.{jpg,png,svg,gif,ico,webp,mp4}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    sass = require('gulp-sass')(require('sass'));

function browserSyncFunction () {
    browserSync.init({
        proxy: "vue-twitter",
        notify: false
    })
}
function htmlFunc() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}
function htmlPartsFunc() {
    return src(path.src.html_parts)
        .pipe(dest(path.build.html_parts))
        .pipe(browserSync.stream())
}
function vueFunc() {
    return src(path.src.vue)
        .pipe(fileinclude())
        .pipe(dest(path.build.vue))
        .pipe(browserSync.stream())
}
function cssFunc() {
    return src(path.src.sass)
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest(path.build.sass))
        .pipe(browserSync.stream())
}
function jsFunc() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}
function img() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream())
}
function watchFiles() {
    gulp.watch([path.watch.html], htmlFunc);
    gulp.watch([path.watch.html_parts], htmlPartsFunc());
    gulp.watch([path.watch.sass], cssFunc);
    gulp.watch([path.watch.js], jsFunc);
    gulp.watch([path.watch.vue], vueFunc);
    gulp.watch([path.watch.img], img);

}

let build = gulp.series(htmlFunc, htmlPartsFunc, vueFunc, gulp.parallel(cssFunc, jsFunc, img))
let watch = gulp.parallel(build, watchFiles, browserSyncFunction);


exports.img = img;
exports.vue = vueFunc;
exports.js = jsFunc;
exports.css = cssFunc;
exports.html = htmlFunc;
exports.html = htmlPartsFunc;
exports.build = build;
exports.watch = watch;
exports.default = watch;