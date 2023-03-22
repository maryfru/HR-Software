// Login- phase

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkBox = document.getElementById("chkWindowsAuthentication");

// Populate Fields with checkBox
function populateFields() {
  if (checkBox.checked) {
    username.value = "testUser123";
    password.value = "test@Test1.5";
  } else {
    clearFields();
  }
}

// Clear fields when checkBox is unchecked
function clearFields() {
  username.value = "";
  password.value = "";
}

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

// Event listeners
form.addEventListener("submit", function (e) {
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

checkBox.addEventListener("change", function () {
  if (this.checked) {
    populateFields();
  } else {
    clearFields();
  }
});

//the option to change the background color
function changeColor() {
  let color = document.getElementById("colorInput").value;
  document.body.style.backgroundColor = color;
}
