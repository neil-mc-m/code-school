let myContent = document.getElementById('app');

const cars = ['BMW', 'Audi', 'VolksWagen', 'Skoda', 'Volvo'];

let htmlLinks = '';

// for loop with index counter
for (let i = 0; i < cars.length; i++) {
    htmlLinks = htmlLinks + `<a href="https://www.google.com/search?q=${cars[i]}" target="_blank">${cars[i]}</a><br/>`;
}

// let htmlLinks = '';
// for loop with no counter, note the order of the variables `car` and `cars`.
for (let car of cars) {
    htmlLinks += `<a href="https://www.google.com/search?q=${car}" target="_blank">${car}</a><br/>`;
}

// while loop with counter
let count = 0;
while (count < 10) {
    htmlLinks += "The number is " + count;
    count++;
}

// do/while loop with counter, the block inside `do` gets ran at least once
let i = 0;
do {
    htmlLinks += i + '<br>';
    i++;
} while (i < 5);


// forEach loop. note, this takes a function as a parameter, where each item of the array gets passed to the funtion
cars.forEach(function (car) {
    // switch statement
    switch (car.toLowerCase()) {
        case 'volvo':
            htmlLinks += `<a href="https://www.google.com/search?q=${car}" target="_blank">${car}</a><br/>`;
            break;
        case 'bmw':
            htmlLinks += `<a href="https://${car}.com">${car}</a>`;
            break;
        default:
            htmlLinks += `${car} not found`;
    }
});

// html output
myContent.innerHTML = htmlLinks;
