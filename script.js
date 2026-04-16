//--- Contact form validation (contact.html)
if (typeof $ !== "undefined") {

$(document).ready(function() {

  $("#contactForm").submit(function(event) {
   event.preventDefault();

      let name = $("#name").val();
      let email = $("#email").val();
      let message = $("#message").val();

      if (name === "" || email === "" || message === "") {
        $("#formMessage").text("All fields must be filled in.");
      } else {
        $("#formMessage").text("Message delivered.");
      }

    });

  });
}


//---Open/Closed Status (index.html)

let hour = new Date().getHours();
let message = "";

// matching open times in html file
let day = new Date().getDay();

if ((day >= 1 && day <= 5 && hour >= 8 && hour < 22) ||
    ((day === 0 || day === 6) && hour >= 8 && hour <20)) {
    message = "Gym Status: OPEN";
    style = "color: green;";
} else {
  message = "Gym Status: CLOSED";
  style = "color: red;";
}

document.getElementById("status").innerText = message;
document.getElementById("status").style = style;
