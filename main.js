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
   id: "os20lq1683508822763",
    type: "Medical",
    startdate: "03.03.2023",
    enddate: "06.03.2023",
    days: "4",
    status: "Approved",
    comment: "Thx"
}

const shift2 = {
    id: "2xykhk1683509301861",
    type: "Rest",
    startdate: "20.03.2023",
    enddate: "26.03.2023",
    days: "7",
    status: "Not approved",
    comment: "-"
}

const shift3 = {
  id: "u22ndu1683509345761",
    type: "Rest",
    startdate: "11.04.2023",
    enddate: "12.04.2023",
    days: "2",
    status: "Approved",
    comment: "Ok."
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

})
