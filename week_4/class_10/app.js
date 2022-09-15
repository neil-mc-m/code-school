
// the form element
let form = document.getElementById('login-form');

// the error field
let formError = document.getElementById('formError');


// the listener that does the validating when submit is clicked
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const emailValue = formData.get('email');

    if (emailValue.indexOf('.') === -1) {
        formError.style.display = 'block';
    } else {
        console.log('Valid email');
        this.submit();
    }
});
