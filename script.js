const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const error = formControl.querySelector("small");
  error.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Authentication to main-site
function auth() {
  if (username.value === "testUser123" && password.value === "test@Test1.5") {
    window.location.assign("main.html");
  } else {
    alert("Invalid Credential");
    return;
  }
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "testUser123") {
    showSuccess(username);
  } else {
    showError(username, "Please enter a valid Username");
  }
});

form.addEventListener("submit", function (e) {
  if (password.value === "test@Test1.5") {
    showSuccess(password);
  } else {
    showError(password, "Please enter a valid Password");
  }
});

//the option to change the background color
// function changeColor() {
//   let color = document.getElementById("colorInput").value;
//   document.body.style.backgroundColor = color;
// }
