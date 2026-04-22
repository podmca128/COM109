function formValidate() {

    const name = document.getElementById("member-name").value.trim(); /*Gets the value of the name field and removes any extra spaces at the beginning or end*/
    const email = document.getElementById("member-email").value.trim(); /*Gets the value of the email field and removes any extra spaces at the beginning or end*/
    const phone = document.getElementById("member-phone").value.trim(); /*Gets the value of the phone field and removes any extra spaces at the beginning or end*/
    const membership = document.getElementById("membership").value; /*Gets the value of the membership type field*/

    const nameErr = document.getElementById("name-error"); /*Gets the element where the name error message will be displayed*/
    const phoneErr = document.getElementById("phone-error"); /*Gets the element where the phone error message will be displayed*/
    const emailErr = document.getElementById("email-error"); /*Gets the element where the email error message will be displayed*/
    
    nameErr.textContent = ""; /*Resets the error messages to empty before validating the form*/
    phoneErr.textContent = "";
    emailErr.textContent = "";
    
    let isValid = true; /*Initialises a variable to keep track of whether the form is valid or not*/

    if (name === "") { /*If the name field is empty then an error is shown*/
        nameErr.textContent = "Name must not be empty.";
        isValid = false;
    } else if (/\d/.test(name)) { /*If the name field contains numbers then an error is shown*/
        nameErr.textContent = "Name must not contain numbers.";
        isValid = false;
    }

    if (phone === "" || !/^[0][7][0-9]{9}$/.test(phone)) { /*If the phone field is empty or does not match the pattern then an error is shown*/
        phoneErr.textContent = "Phone number must start with 07.";
        isValid = false;
    }

    if (phone.length !== 11) { /*If the phone number is not 11 digits long then an error is shown*/
        phoneErr.textContent = "Phone number must be 11 digits long.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) { /*If the email field is empty or does not contain an @ symbol or a . then an error message will be shown*/
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    
    if (!isValid) { /*If the form is not valid then a message will be shown asking the user to correct the errors*/
        document.getElementById("formMessage").textContent = "Please correct the errors above.";
        document.getElementById("formMessage").style.color = "red"; /*Makes the colour of the message red*/
        return;
    }

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}! Your ${membership} membership has been registered.`; /*If the form is valid then a thank you message will be shown with the name of the user and the type of membership they have registered for*/
    document.getElementById("formMessage").style.color = "green"; /*Makes the colour of the message green*/
    
    document.querySelector(".signup-form").reset(); /*Resets the form after successful submission*/

}
 
document.querySelector(".signup-form").addEventListener("submit", function(e) { 
    e.preventDefault(); /*Stops page reloading when sending the form*/
    formValidate();
});

function resetErrors() {
    document.getElementById("name-error").textContent = ""; /*Resets the error messages to empty when the user starts typing in the form again*/
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";
}
