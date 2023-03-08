const spinButtons = document.getElementsByClassName('random-number');

const min = 1;
const max = 99;

for (let spinButton of spinButtons) {
    spinButton.addEventListener('click', function (event) {
        let adjacentSibling = this.nextElementSibling;
        adjacentSibling.innerText = generateRandom(min, max);
    })
}

function generateRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}
