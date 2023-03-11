### Functions

https://javascript.info/function-basics

Functions are the building blocks of a Javascript program.

Functions can be declared as follows:

```javascript
function calculateNoOfMinutes(days) {
    const numberOfHours = days * 24;
    const numberOfMinutes = numberOfHours * 60;

    return numberOfMinutes;
}
```

this function can then be used :

```javascript
calculateNoOfMinutes(10);
```

the `argument` (the number 10 in this case) is passed to the function and becomes the parameter `days`

This means we can use the function at different points in our code with different `arguments`
e.g 

```javascript
calculateNoOfMinutes(20);
```

Functions are usually associated with an action i.e creating, getting, calculating, validating etc
And so they are usually named accordingly.

The above function is a named function, but it is also possible to have functions without a name. These are known as anoymous functions
and are very commonly seen as parameters to other functions e.g  event listeners or some of the array methods.

```javascript
let myFunction = function () {
    return console.log('hello');
}
```

