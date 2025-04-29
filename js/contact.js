function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validateField(value, errorElementId, validationFunction = null) {
    if (value === "" || (validationFunction && !validationFunction(value))) {
        document.getElementById(errorElementId).style.display = 'block';
        return false;
    } else {
        document.getElementById(errorElementId).style.display = 'none';
        return true;
    }
}

function validateForm() {
    const formData = new FormData(document.getElementById('contact-form'));

    let isValid = true;
    isValid &= validateField(formData.get('name'), 'name-error');
    isValid &= validateField(formData.get('email'), 'email-error', validateEmail);
    isValid &= validateField(formData.get('subject'), 'subject-error');
    isValid &= validateField(formData.get('message'), 'message-error');

    return Boolean(isValid);
}

function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
        document.getElementById('thank-you-message').style.display = 'block';
        document.getElementById('contact-form').reset();
    }
}