;(function(name, definition) {
  if (typeof module != 'undefined') {
    module.exports = definition();
  } else if (typeof define == 'function' && typeof define.amd == 'object') {
    define(name, [], definition);
  } else {
    this[name] = definition();
  }
}(' paginateMe', function() {
  return function(collection, page, count) {
    var begin = (page - 1) * count;
    var end = page * count;
    return collection.slice(begin, end);
  };
}));
