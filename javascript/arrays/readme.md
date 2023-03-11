### Arrays

Arrays are a way to store collections or lists of values. 

You can declare an array like:

```javascript
let myArray = [];
```

or alternatively, with values

```javascript
let myArray = ['yellow', 'brown', 'purple'];
```

These values are numerically indexed, starting at 0 and you can access the values by the index

```javascript
myArray[1] // brown
```

When you declare an array, the array inherits all the built in javascript array functions:

```javascript
myArray.push('green'); // ['yellow', 'brown', 'purple', 'green']
myArray.indexOf('brown');// 1
myArray.unshift('blue'); // adds to the start
myArray.shift(); // remove from start of array
myArray.pop(); // remove from end of array
```
and more (https://javascript.info/array-methods)

Arrays are commonly used in conjunction with loops