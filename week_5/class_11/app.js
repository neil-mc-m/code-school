let myContent = document.getElementById('app');
const cars = ['volvo', 'bmw', 'skoda', 'volkswagon'];
let text = '';


/**
 * for loops
 **/

// for (let i = 0; i < cars.length; i++) {
//     text += `<a href="https://www.google.com/search?q=${cars[i]}" target="_blank">${cars[i]}</a><br/>`;
// }

for (let car of cars) {
    text += `<a href="https://www.google.com/search?q=${car}" target="_blank">${car}</a><br/>`;
}

myContent.innerHTML = text;

/**
 * while and do/while loops
 **/

// let count = 0;

// while (count < 10) {
//     text += "The number is " + count;
//     count ++;
// }
//
// let i = 10;
//
// do {
//     text += i + '<br>';
//     i++;
// } while (i < 5);
//


// optional classwork solution
// const winningLottoNumbers = [10, 23, 11, 73, 44, 57];
// const userNumbers = [10, 23, 11, 44, 57, 57];
//
//
// function matchingNumbers (userNumbers, winningLottoNumbers) {
//     let matchingNumbers = 0;
//     for (let i = 0;i < userNumbers.length; i++) {
//         if (winningLottoNumbers.includes(userNumbers[i])) {
//             matchingNumbers = matchingNumbers + 1;
//         }
//     }
//     return matchingNumbers;
// }

