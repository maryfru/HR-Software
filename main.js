import {
  updateShiftRequest,
  deleteShiftRequest,
  createShiftRequest,
  loadShiftsRequest,
} from "./requests";

const table = document.querySelector("#shifts-table");
const addRowBtn = document.querySelector("#add row");
const cancelBtn = document.querySelector("#cancel");
const typeInput = document.querySelector("#shifts");
const startDateInput = document.querySelector("#startDate");
const endDateInput = document.querySelector("#endDate");
const submitBtn = document.querySelector("#submit");
const logoutBtn = document.querySelector(".logout");

// Navigation display
function hideAllPages() {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document.getElementById("top-menu-bar").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      const id = e.target.getAttribute("data-page");
      displayPage(id);
    }
  });
}

displayPage("user-info");
initMenu();

function insertRow(shift) {
  const row = table.insertRow();
  row.innerHTML = `
         <td><button class="edit-button" data-id="${shift.id}">🖊</button></td>
         <td>${shift.type}</td>
        <td>${shift.startDate}</td>
         <td>${shift.endDate}</td>
         <td>${shift.days}</td>
         <td>${shift.status}</td>
         <td>${shift.comment}</td>
         <td><button class="delete-button" data-id="${shift.id}">❌</button></td>
       `;
}

const shift1 = {
  id: 1,
  type: "Vacation",
  startDate: "02/01/2023",
  endDate: "01/07/2023",
  days: 6,
  status: "Approved",
  comment: "Greece vacation" 
}

const shift2 = {
  id: 2, 
  type: "Sick leave",
  startDate: "22/02/2023",
  endDate: "02/03/2023",
  days: 9,
  status: "Approved",
  comment: "Flu" 
}

const shift3 = {
  id: 3,
  type: "Unpaid leave",
  startDate: "11/04/2023",
  endDate: "15/04/2023",
  days: 5,
  status: "Not approved",
  comment: "Visiting family"
}

insertRow(shift1);
insertRow(shift2); 
insertRow(shift3);


// Add new shift
addRowBtn.addEventListener("click", () => {
  function createShiftRequest(shift) 
  form.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});

// Edit or delete shift 
table.addEventListener("click", (e) => {
  if (e.target.matches(".edit-button")) {
    const row = e.target.closest("tr");
    const id = e.target.getAttribute("data-id");
    const type = table.rows[rowIndex].cells[1].textContent; 
    const startDate = table.rows[rowIndex].cells[2].textContent;
    const endDate = table.rows[rowIndex].cells[3].textContent;
    const days = table.rows[rowIndex].cells[4].textContent;
    const status = table.rows[rowIndex].cells[5].textContent;
    const comment = table.rows[rowIndex].cells[6].textContent;
    const updatedData = {
    type, 
    startDate,
    endDate,
    days,
    status,
    comment
};  
  table.addEventListener("click", (e) => {
  if (e.target.matches(".submit-button")) {
    updateShiftRequest(id, updatedData); 
  }
});
  } else if (e.target.matches(".delete-button")) {
    if (confirm("Are you sure you want to delete this shift?")) { 
    const row = e.target.closest("tr");
    const id = e.target.getAttribute("data-id");
    deleteShiftRequest(id); 
    row.remove(); 
  }}
});

// error handling
updateShiftRequest(id, updatedData) 
  .catch(err => console.log(err)); 

if (!type.value || !startDate.value || !endDate.value || !days.value || !comment.value) {
    alert("Please fill in all fields");
    return;
  } 

submitBtn.addEventListener("click", () => {
  const data = {
    type: typeInput.valueOf,
    startDate: startDateInput.value,
    endDate: endDateInput.value,
    days: days.value,
    status: status.valueOf,
    comment: comment.valueOf
  };

  // Logout button
logoutBtn.addEventListener("click", () => {
  window.location.replace("index.html");
});

// Navigation display
function hideAllPages() {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document.getElementById("top-menu-bar").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      const id = e.target.getAttribute("data-page");
      displayPage(id);
    }
  });
}

displayPage("user-info");
initMenu();

//punch in - out Clock

var onClock = false,
  canUndo = false,
  punchBtn = $("#punch"),
  undoBtn = $("#undo"),
  resetBtn = $("#reset"),
  punchInIcon = $("#punch-in"),
  punchOutIcon = $("#punch-out"),
  increment = 0,
  times = ["8:00am", "12:00pm", "1:00pm", "5:00pm"];

timeShow();
punchBtn.click(tog);
undoBtn.click(undo);
resetBtn.click(reset);

function tog() {
  undoSet(true);

  if (increment < 4) {
    //adjust button appearance
    checkClock(!onClock);

    //show punch time
    $("td")[increment].innerHTML = times[increment];

    increment++;
    timeShow();

    if (increment > 3) {
      showBye();
    }
  }
}

function punchText(setting) {
  punchBtn.innerHTML = setting;
}

function timeShow() {
  $("#time").text(times[increment]);
}

function undo() {
  if (increment > 0 && canUndo) {
    increment--;
    timeShow();
    $("td")[increment].innerHTML = "";
    checkClock(!onClock);
  }

  undoSet(false);
}

function reset() {
  $("td").each(function () {
    this.innerHTML = "";
  });
  increment = 0;
  timeShow();
  showPunchIn();
  undoSet(false);
  onClock(false);
}

function checkClock(setting) {
  onClock = setting;

  if (onClock) {
    showPunchOut();
  } else {
    showPunchIn();
  }
}

function showPunchIn() {
  punchBtn.addClass("btn-success");
  punchBtn.removeClass("btn-default");
  punchBtn.removeClass("btn-danger");
  punchInIcon.css("display", "block");
  punchOutIcon.css("display", "none");
  $("#bye").css("display", "none");
}

function showPunchOut() {
  punchBtn.removeClass("btn-success");
  punchBtn.removeClass("btn-default");
  punchBtn.addClass("btn-danger");
  punchInIcon.css("display", "none");
  punchOutIcon.css("display", "block");
  $("#bye").css("display", "none");
}

function showBye() {
  punchBtn.removeClass("btn-success");
  punchBtn.removeClass("btn-danger");
  punchBtn.addClass("btn-default");
  punchInIcon.css("display", "none");
  punchOutIcon.css("display", "none");
  $("#bye").css("display", "block");
}

function undoSet(setting) {
  canUndo = setting;

  if (canUndo) {
    undoBtn.removeClass("btn-default");
    undoBtn.addClass("btn-warning");
  } else {
    undoBtn.removeClass("btn-warning");
    undoBtn.addClass("btn-default");
  }
}})
