let myContent = document.getElementById('app');

function calculateNoOfMinutes(days) {
    const numberOfHours = days * 24;

    return numberOfHours * 60;
}


myContent.innerHTML = calculateNoOfMinutes(5);
