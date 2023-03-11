## javascript numbers

https://javascript.info/number


numbers are a primitive type in javascript meaning they have no complex behaviour and are only capable of representing one value.

numbers are numeric values declared without quotes, they can also be floating point numbers (numbers with decimal points)

Numbers have a handful of built-in functions available:

[EXAMPLE]
```javascript
let myNum = 123.456789;
myNum.toString(); // '123.456789.
myNum.toFixed(2); //  123.46
myNum.toPrecision(7); // 123.4567 (7 digits)
```
and more.

we can explicitly create a number from a numeric string by :

```javascript
let number = Number('2');
```
