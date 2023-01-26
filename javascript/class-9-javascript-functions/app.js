let myContent = document.getElementById('app');

// number
let myNumber = Number('20');
console.log(myNumber);

// string
let myString = 'Dublin Coding School     ';
console.log(myString.trim()); // 'Dublin Coding School'
console.log(myString.indexOf('u')); // 1
console.log(myString.toUpperCase()); // 'DUBLIN CODING SCHOOL'


// array
let myArray = [];
myArray.push('green'); // ['green']
myArray.push('red'); // ['green', 'red']
myArray.push('black') // ['green', 'red', 'black']
myArray.indexOf('red');// 1
let newArray = myArray.map(function (value) { // ['GREEN', 'RED', 'BLACK']
    return value.toUpperCase()
})

console.log(newArray.join(' '));

// functions

//named function
function output (parameter) {
    return parameter.toUpperCase();
}

// usage
console.log(output('dublin coding school full stack developer'));

// anonymous functions
let anonFunction = function (parameter) {
    return parameter.toUpperCase();
}

// usage
console.log(anonFunction('full stack developer courses'));


// objects
let myObject = {};
myObject.type = 'ford';
myObject.fuel = 'diesel';
myObject.mileage = 120000;
myObject.value = 10000;

// object with anonymous functions
let car = {
    milesPerLiter: 0,
    drive: function (distance, litersOfFuelUsed) {
        this.milesPerLiter = distance / litersOfFuelUsed;
    },
    calculateMilesPerLiter: function () {
        return this.milesPerLiter;
    }
}

const ford = Object.create(car);

ford.drive(20, 2);

myContent.innerHTML = '<div>Ford miles per liter:' + ford.calculateMilesPerLiter() + '</div>';
