;(function(name, definition) {
  if (typeof module != 'undefined') {
    module.exports = definition();
  } else if (typeof define == 'function' && typeof define.amd == 'object') {
    define(name, [], definition);
  } else {
    this[name] = definition();
  }
}(' paginateMe', function() {
  /**
   * Returns a relivant slice of a collection
   * @param  {Array<Object>} collection The collection being paginated.
   * @param  {number} page The page number
   * @param  {number} count The amount of values per page
   * @return {[Array<Object>} The relivant slice of the collection
   */
  return function(collection, page, count) {
    var begin = (page - 1) * count;
    var end = page * count;
    return collection.slice(begin, end);
  };
}));
