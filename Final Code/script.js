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