const { watch, series } = require('gulp');

function styles(cb)
{
    cb();
}

function scripts(cb)
{
    cb();
}

exports.default = function() {
  // All events will be watched
  watch('styles/', { events: 'all', ignoreInitial: false }, styles);
  watch('scripts/', { events: 'all', ignoreInitial: false }, scripts);
};