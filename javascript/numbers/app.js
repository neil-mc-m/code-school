let myContent = document.getElementById('app');

let myNum = 123.456789;

let myNumText = myNum.toString();
console.log(myNumText);

let myNumFixed = myNum.toFixed(2);
console.log(myNumFixed);

let myNumPrecision = myNum.toPrecision(7);
console.log(myNumPrecision);

// html output
myContent.innerHTML = myNum;
