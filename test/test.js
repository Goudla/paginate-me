var assert = require('assert');
var paginateMe = require('../');

var users = [
  { user: 'Michael K. Brandy', age: 45 },
  { user: 'Kevin B. Boos', age: 31 },
  { user: 'Jerry J. Petty', age: 58 },
  { user: 'Robert J. Stokes', age: 33 },
  { user: 'Harold M. McCoy', age: 43 },
  { user: 'Linda M. Wells', age: 50 },
  { user: 'Ana R. Thiel', age: 21 },
  { user: 'Michael J. Grimes', age: 54 },
  { user: 'William L. Jaramillo', age: 56 },
  { user: 'Eugenio J. Stephens', age: 84 }
];

describe('paginateMe', function() {
  it('Returns objects for [[\'Michael K. Brandy\', 45]] for users, 1, 1', function() {
    var result = paginateMe(users, 1, 1);
    assert.deepEqual(result, [
      {
        age: 45,
        user: 'Michael K. Brandy'
      }
    ]);
  })
});
