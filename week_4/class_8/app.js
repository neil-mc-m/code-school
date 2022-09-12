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

myContent.innerHTML = newArray.join(' ');
