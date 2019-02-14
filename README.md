# paginate-me
A JavaScript utility function for paginating an array

### Installation

In a browser:
```html
<script src="index.js"></script>
```

Using [npm](https://www.npmjs.com/):

    $ npm install --save paginate-me

Or [yarn](https://yarnpkg.com/):

    $ yarn add paginate-me

In Node.js:
```js
var paginateMe = require('paginate-me');
```

### Example
```js
var users = [
  { 'user': 'Michael K. Brandy', 'age': 45 },
  { 'user': 'Kevin B. Boos', 'age': 31 },
  { 'user': 'Jerry J. Petty', 'age': 58 },
  { 'user': 'Robert J. Stokes', 'age': 33 },
  { 'user': 'Harold M. McCoy', 'age': 43 },
  { 'user': 'Linda M. Wells', 'age': 50 },
  { 'user': 'Ana R. Thiel', 'age': 21 },
  { 'user': 'Michael J. Grimes', 'age': 54 },
  { 'user': 'William L. Jaramillo', 'age': 56 },
  { 'user': 'Eugenio J. Stephens', 'age': 84 }
];

paginateMe(users, 1, 1)
//=> objects for [['Michael K. Brandy', 45]]
```
