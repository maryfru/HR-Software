const addRowBtn = document.querySelector("#add row");
const cancelBtn = document.querySelector("#cancel");
var typeInput = document.querySelector("#selectShifts");
var startDateInput = document.querySelector("#startDate");
var endDateInput = document.querySelector("#endDate");
const form = document.querySelector("#editForm");
const shiftsTable = document.querySelector("#shiftsTable");
let allShifts = [];
let editId;

// Calculate days
const startTimestamp = new Date(startDate).getTime();
const endTimestamp = new Date(endDate).getTime();
const days = Math.ceil((endTimestamp - startTimestamp) / (1000 * 60 * 60 * 24));
document.getElementById("days").value = days;

// Read shift data
function readShifts() {
  return {
    type: document.getElementById("type").value,
    startDate: $("#startDate").value,
    endDate: $("#endDate").value,
    days: $("#days").value,
    status: $("").value,
    comment: $("").value,
  };
}

// Adding elements to the form
function insertRow(shift) {
  shiftsTable.innerHTML += `<tr>
         <td><button class="edit-button" data-id="${shift.id}">🖊</button></td>
         <td>${shift.type}</td>
        <td>${shift.startDate}</td>
         <td>${shift.endDate}</td>
         <td>${shift.days}</td>
         <td>${shift.status}</td>
         <td>${shift.comment}</td>
         <td><button class="delete-button" data-id="${shift.id}">❌</button></td>
       </tr>`;
}

//Creating a new team or editing an existing team based on form submission
async function onSubmit(e) {
  e.preventDefault();
  const shift = readShifts();
  let status = { success: false };
  if (editId) {
    shift.id = editId;
    status = await updateShiftRequest(shift);
    if (status.success) {
      allShifts = allShifts.map((t) => {
        if (s.id === shift.id) {
          return {
            ...s,
            ...shift,
          };
        }
        return s;
      });
    }
  } else {
    status = await createShiftRequest(shift);
    if (status.success) {
      shift.id = status.id;
      allShifts = [...allShifts, shift];
    }
  }

  if (status.success) {
    displayShifts(allShifts);
    e.target.reset();
  }
}

// Adding a new row (shift) to the table
addRowBtn.addEventListener("click", function () {
  onSubmit(shift);
});

//Load shifts and display them
function displayShifts(shifts) {
  document.querySelector("#shiftsTable").innerHTML = insertRow(shifts);
}
function loadShifts() {
  return loadShiftsRequest().then((shifts) => {
    allShifts = shifts;
    displayShifts(shifts);
    return shifts;
  });
}

function loadShifts() {
  return loadShiftsRequest().then((shifts) => {
    allShifts = shifts;
    displayShifts(shifts);
    return shifts;
  });
}

function prepareEdit(id) {
  const shift = allShifts.find((shift) => shift.id === id);
  editId = id;
  insertRow(shift);
}

//Reset id to undefined
function initEvents() {
  form.addEventListener("submit", onSubmit);
  form.addEventListener("reset", () => {
    editId = undefined;
  });

  // Deleting teams & and preparing the edit form
  form.addEventListener("click", async (e) => {
    if (e.target.matches(".delete-button")) {
      const id = e.target.dataset.id;
      const status = await deleteTeamRequest(id);
      if (status.success) {
        loadTeams();
      }
    } else if (e.target.matches(".edit-button")) {
      const id = e.target.dataset.id;
      prepareEdit(id);
    }
  });
}

// Cancel button
cancelBtn.addEventListener("click", () => {
  typeInput.selectedIndex = 0;
  startDateInput.value = "";
  endDateInput.value = "";
});

loadShiftsRequest().then((shifts) => {
  shifts.forEach((shift) => {
    insertRow(shift);
  });
});
