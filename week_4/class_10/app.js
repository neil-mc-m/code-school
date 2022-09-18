
// the form element
let form = document.getElementById('login-form');

// the error field
let formError = document.querySelector('.form-error');

// the email field
let emailLoginField = document.getElementById('emailLogin');

// the listener that does the validating when submit is clicked
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const emailValue = formData.get('email');

    if (emailValue.indexOf('.') === -1) {
        formError.style.visibility = 'visible';
    } else {
        this.submit();
    }
});

emailLoginField.addEventListener('focus', function () {
    if (formError.style.visibility === 'visible') {
        formError.style.visibility = 'hidden';
    }
})
