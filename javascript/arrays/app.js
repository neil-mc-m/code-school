let myContent = document.getElementById('app');

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
console.log(myJoinedArray);


let newArray = myJoinedArray.map(function (value) { // ['GREEN', 'RED', 'BLACK']
    return value.toUpperCase();
})

myContent.innerHTML = newArray;
