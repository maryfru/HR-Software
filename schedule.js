const addRowBtn = document.querySelector("#add row");
const cancelBtn = document.querySelector("#cancel");
const typeInput = document.querySelector("#shifts");
const startDateInput = document.querySelector("#startDate");
const endDateInput = document.querySelector("#endDate");
const submitBtn = document.querySelector("#submit");
const body = document.querySelector("#table tbody");

function insertRow(shift) {
  body.innerHTML += `<tr>
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

// // Add new shift
// addRowBtn.addEventListener("click", () => {
//   createShiftRequest(shift);
//   form.style.display = "block";
// });

cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});

// Edit or delete shift
body.addEventListener("click", (e) => {
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
      comment,
    };
  } else if (e.target.matches(".delete-button")) {
    if (confirm("Are you sure you want to delete this shift?")) {
      const row = e.target.closest("tr");
      const id = e.target.getAttribute("data-id");
      deleteShiftRequest(id);
      row.remove();
    }
  }
});

body.addEventListener("click", (e) => {
  if (e.target.matches(".submit-button")) {
    if (
      !type.value ||
      !startDate.value ||
      !endDate.value ||
      !days.value ||
      !comment.value
    ) {
      alert("Please fill in all fields");
      return;
    }
    updateShiftRequest(id, updatedData);
  }
});

// submitBtn.addEventListener("click", () => {
//   const data = {
//     type: typeInput.valueOf,
//     startDate: startDateInput.value,
//     endDate: endDateInput.value,
//     days: days.value,
//     status: status.valueOf,
//     comment: comment.valueOf,
//   };
// });

loadShiftsRequest().then((shifts) => {
  shifts.forEach((shift) => {
    insertRow(shift);
  });
});
