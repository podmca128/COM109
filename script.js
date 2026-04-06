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
