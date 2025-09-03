const { src, dest, watch, series } = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const files = {
  scssPath: 'assets/scss/**/*.scss',
  cssDest: 'assets/css'
};

function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(gulpSass.sync().on('error', gulpSass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(files.cssDest))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  watch(files.scssPath, scssTask);
  watch('./*.html').on('change', browserSync.reload);
  watch('./assets/js/**/*.js').on('change', browserSync.reload);
}

exports.default = series(scssTask, serve);
exports.build = scssTask;
