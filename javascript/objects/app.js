const myContent = document.getElementById('app');

const driveButton = document.getElementById('drive');

function Car (pricePerLiter, distance, milesPerLiter) {
    this.pricePerLiter = pricePerLiter;
    this.distance = distance;
    this.milesPerLiter = milesPerLiter;

    this.calcPrice = function () {
        let priceForJourney = (this.distance / this.milesPerLiter) * this.pricePerLiter
        return Number(priceForJourney).toPrecision(2);
    }
}

driveButton.addEventListener('click', function () {
    const pricePerLiter = document.getElementById('price-per-liter');
    const distanceTravelled = document.getElementById('distance');
    const milesPerLiter = document.getElementById('miles-per-liter')


    let ford = new Car(pricePerLiter.value, distanceTravelled.value, milesPerLiter.value)


    // html output
    myContent.innerHTML = `costs ${ford.calcPrice()} euros`;
})



