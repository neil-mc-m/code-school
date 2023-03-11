#### Objects

Objects are the most complex data structure in Javascript but they can hold both properties and functionality.
There are several ways to create objects in Javascript:
1. Object literal:
    https://javascript.info/object#literals-and-properties

```javascript
let car = {
    pricePerLiter: 1.67,
    distance: 100,
    milesPerLiter: 77,
    calcPrice: function () {
        return (this.distance / this.milesPerLiter) * this.pricePerLiter;
    }
}
```
the object literal can be used like:
```javascript
car.calcPrice();
```

2. Constructor function (note the capital C)
   https://javascript.info/constructor-new#constructor-function
```javascript
function Car (pricePerLiter, distance, milesPerLiter) {
    this.pricePerLiter = pricePerLiter;
    this.distance = distance;
    this.milesPerLiter = milesPerLiter;

    this.calcPrice = function () {
        let priceForJourney = (this.distance / this.milesPerLiter) * this.pricePerLiter
        return Number(priceForJourney).toPrecision(2);
    }
}
```

To create an instance of the object we can use this syntax:

```javascript
let ford = new Car(1.67, 100, 78);
```

and to use it:
```javascript
ford.calcPrice();
```

Objects are also the data type best suited to 'modelling' more complex behaviours.

