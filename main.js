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

// Fetch data from Node API and populate table
fetch("api/shifts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((shift) => {
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
    });
  })
  .catch((error) => console.error(error));

// Add new shift
addRowBtn.addEventListener("click", () => {
  form.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  form.style.display = "none";
});

submitBtn.addEventListener("click", () => {
  const data = {
    type: typeInput.value,
    startDate: startDateInput.value,
    endDate: endDateInput.value,
  };

  fetch("api/shifts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((shift) => {
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

      form.style.display = "none";
    })
    .catch((error) => console.error(error));
});
