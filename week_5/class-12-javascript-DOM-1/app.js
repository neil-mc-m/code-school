const checkAgeButton = document.querySelector('#inputElement');
const inputElement = document.getElementById('inputElement');
const messageDiv = document.getElementById('message-div');

checkAgeButton.addEventListener('click', function () {
    if (inputElement.value > 18) {
        inputElement.classList.add('ok');
        messageDiv.innerText = 'you are over 18';
        // inputElement.value = 'you are over 18';
    } else {
        inputElement.classList.add('error');
    }
})