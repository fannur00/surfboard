const { src, dest, task, series, watch, parallel} = require('gulp');
const clean = require('gulp-clean');
const sass  = require('gulp-sass');
const concat = require('gulp-concat'); 
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

task('clean',  () => {
    return src('dist/**/*', {read: false})
        .pipe(clean());
});

task('copy:html',  () =>  {
    return src('src/*.html').pipe(dest('dist')).pipe(reload({stream : true}));
});

task('img', () => {
    return src('src/img/*').pipe(dest('dist/img')).pipe(reload({stream : true}));
})

task('scripts', () => {
    return src('src/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(reload({stream : true}))

})

const styles = [
    'node_modules/normalize.css/normalize.css',
    'src/styles/main.scss'
]
task('styles',  () =>  {
    return src(styles)
    .pipe(concat('main.scss'))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(px2rem())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(reload({stream : true}))
});

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
    });
});


watch('./src/styles/**/*.scss', series('styles'));
watch('./src/*.html', series('copy:html'));
watch('./src/scripts/*.js', series('scripts'));

task('default', series('clean', parallel('copy:html', 'styles', 'scripts', 'img'), 'server'))