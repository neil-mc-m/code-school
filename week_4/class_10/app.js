
// the form element
let form = document.getElementById('login-form');

// the error field
let formError = document.getElementById('formError');


// the listener that does the validating when submit is clicked
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);


});
//
//
// // functions
//
// function reverseWordOrder (value) {
//     return value.split(' ').reverse().join(' ');
// }
//
// function logEvent (eventName, occurredOn) {
//     return 'Event: ' + eventName + ' occurred on ' + occurredOn.toDateString();
// }






