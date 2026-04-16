function formValidate() {

    const name = document.getElementById("member-name").value.trim();
    const email = document.getElementById("member-email").value.trim();
    const phone = document.getElementById("member-phone").value.trim();
    const membership = document.getElementById("membership").value;

    const nameErr = document.getElementById("name-error");
    const phoneErr = document.getElementById("phone-error");
    const emailErr = document.getElementById("email-error");
    
    nameErr.textContent = "";
    phoneErr.textContent = "";
    emailErr.textContent = "";
    
    let isValid = true;

    if (name === "") {
        nameErr.textContent = "Name must not be empty.";
        isValid = false;
    } else if (/\d/.test(name)) {
        nameErr.textContent = "Name must not contain numbers.";
        isValid = false;
    }

    if (phone === "" || !/^[0][7][0-9]{9}$/.test(phone)) {
        phoneErr.textContent = "Phone number must start with 07.";
        isValid = false;
    }

    if (phone.length !== 11) {
        phoneErr.textContent = "Phone number must be 11 digits long.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    
    if (!isValid) {
        document.getElementById("formMessage").textContent = "Please correct the errors above.";
        document.getElementById("formMessage").style.color = "red";
        return;
    }

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}! Your ${membership} membership has been registered.`;
    document.getElementById("formMessage").style.color = "green";
    
    document.querySelector(".signup-form").reset();

}

document.querySelector(".signup-form").addEventListener("submit", function(e) {
    e.preventDefault(); //Stops form reloading page on submit
    formValidate();
});

function resetErrors() {
    document.getElementById("name-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";
}