import {
  updateShiftRequest,
  deleteShiftRequest,
  createShiftRequest,
  loadShiftsRequest,
} from "./requests";

const table = document.querySelector("table tbody");
const addRowBtn = document.querySelector("#add row");
const cancelBtn = document.querySelector("#cancel");
const vacationBtn = document.querySelector("#vacations");
const editButtons = document.querySelectorAll("#edit-button");
const deleteButtons = document.querySelectorAll("#delete-button");
const typeInput = document.querySelector("#shifts");
const startDateInput = document.querySelector("#start-date");
const endDateInput = document.querySelector("#end-date");
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
}
