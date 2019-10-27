//Use RegEx to validate form

function validateEmail(input) {

    var emailTest = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailTest.test(input);
}

function validatePhone(input) {

    var phoneTest = /^\d+$/;
    return phoneTest.test(input);
}

function validateForm(event) {
    console.log("validateForm");
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var email = document.getElementById("email").value;
    if (firstname === "") {
        alert("You have to write your firstname");
        event.preventDefault();
        return false;
    }
    if (lastname === "") {
        alert("You have to write your lastname");
        event.preventDefault();
        return false;
    }
    if (!validatePhone(phonenumber)) {
        alert("Phonenumber is not entered or is invalid");
        event.preventDefault();
        return false;
    }
    if (!validateEmail(email)) {
        alert("Email is not entered or is invalid");
        event.preventDefault();
        return false;
    }

    alert("Form submitted successfully");
}
