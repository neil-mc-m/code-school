let myContent = document.getElementById('app');

// number
let myNumber = Number('20');

let myOtherNumber = 10;

console.log(myOtherNumber.toString());

// string
let myString = 'Dublin Coding School     ';
console.log(myString.trim()); // 'Dublin Coding School'
console.log(myString.indexOf('u')); // 1
console.log(myString.toUpperCase()); // 'DUBLIN CODING SCHOOL'
console.log(myString.length); // 'DUBLIN CODING SCHOOL'


let day = 'thursday';
let time = '4 o clock';

const details = 'I will be available ' + day + ', at around ' + time + ', if that suits?';
// String interpolation
const detailsInter = `I will be available ${day}, at around ${time}, if that suits?`;
console.log(detailsInter);
console.log(details);

// array
let myArray = [];
myArray.push('green'); // ['green']
myArray.push('red'); // ['green', 'red']
myArray.push('black') // ['green', 'red', 'black']
myArray.indexOf('red');// 1
myArray.unshift('blue'); // adds to the start
myArray.shift(); // remove from start of array
myArray.pop(); // remove from end of array
let mySecondArray = ['yellow', 'brown', 'purple'];
let myJoinedArray = myArray.concat(mySecondArray);
// console.log(myJoinedArray);


let newArray = myArray.map(function (value) { // ['GREEN', 'RED', 'BLACK']
    return value.toUpperCase();
})

console.log(myFunction(myArray, mySecondArray));
console.log(myFunction(myArray, myJoinedArray));

function myFunction (array1, array2) {
    return array1.concat(array2)
}
// console.log(newArray.join(' '));


let fiveDaysInMinutes = calculateNoOfMinutes(5);

// myContent.innerHTML = fiveDaysInMinutes;


function calculateNoOfMinutes(days) {
    const numberOfHours = days * 24;
    const numberOfMinutes = numberOfHours * 60;

    return numberOfMinutes;
}

let today = new Date();

myContent.innerHTML = today.toDateString();