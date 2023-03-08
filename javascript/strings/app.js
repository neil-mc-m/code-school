let myContent = document.getElementById('app');

let myString = 'Dublin Coding School     ';

console.log(myString.trim()); // 'Dublin Coding School'
console.log(myString.indexOf('u')); // 1
console.log(myString.toUpperCase()); // 'DUBLIN CODING SCHOOL'
console.log(myString.length); // 25

let day = 'thursday';
let time = '4 o clock';

const details = 'I will be available thursday, at around ' + time + ', if that suits?';
// String interpolation
const detailsInter = `I will be available ${day}, at around ${time}, if that suits?`;

console.log(detailsInter);
console.log(details);

// html output
myContent.innerHTML = myString;
