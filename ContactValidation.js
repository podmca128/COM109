function formValidate() {

    const name = document.getElementById("name").value.trim(); /*Gets the value of the name field and removes any extra spaces at the beginning or end*/
    const email = document.getElementById("email").value.trim(); /*Gets the value of the email field and removes any extra spaces at the beginning or end*/
    const phone = document.getElementById("phone").value.trim(); /*Gets the value of the phone field and removes any extra spaces at the beginning or end*/
    const message = document.getElementById("message").value.trim(); /*Gets the value of the message field and removes any extra spaces at the beginning or end*/

    const nameErr = document.getElementById("name-error"); /*Gets the element where the name error message will be displayed*/
    const phoneErr = document.getElementById("phone-error"); /*Gets the element where the phone error message will be displayed*/
    const emailErr = document.getElementById("email-error"); /*Gets the element where the email error message will be displayed*/

    nameErr.textContent = ""; /*Resets the error messages to empty before validating the form*/
    phoneErr.textContent = ""; 
    emailErr.textContent = "";

    let isValid = true;

    if (name === "") { /*If the name field is empty then an error is shown*/
        nameErr.textContent = "Name must not be empty.";
        isValid = false;
    } else if (/\d/.test(name)) { /*If the name field contains numbers then an error is shown*/
        nameErr.textContent = "Name must not contain numbers.";
        isValid = false;
    }

    if (!/^[0][7][0-9]{9}$/.test(phone)) { /*If the input doesnt match the pattern then the error message will be shown*/
        phoneErr.textContent = "Phone number must start with 07 and be 11 digits.";
        isValid = false; 
    }

    if (phone.length !== 11) { /*If the phone number is not 11 digits long then an error is shown*/
        phoneErr.textContent = "Phone number must be 11 digits long.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) { /*If the email field is empty or does not contain an @ symbol or a dot then an error message will be shown*/
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!isValid) {
        document.getElementById("formMessage").textContent = "Please correct the errors above."; /*If the form is not valid then a message will be shown asking the user to correct the errors*/
        document.getElementById("formMessage").style.color = "red"; /*Makes the colour of the message red*/
        return;
    }

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}! Your message has been sent.`; /*If the form is valid then a thank you message will be shown with the name of the user*/
    document.getElementById("formMessage").style.color = "green"; /*Makes the colour of the message green*/

    document.getElementById("contactForm").reset();
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); /*Stops page reloading when sending the form*/
    formValidate();
});

function resetErrors() {
    document.getElementById("name-error").textContent = ""; /*Resets the error messages to empty when the user starts typing in the form again*/
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";
}
