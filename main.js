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

// // Fetch data from Node API and populate table // DONE BY MIHAI
// fetch("api/shifts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((shift) => {
//       const row = table.insertRow();
//       row.innerHTML = `
//         <td><button class="edit-button" data-id="${shift.id}">🖊</button></td>
//         <td>${shift.type}</td>
//         <td>${shift.startDate}</td>
//         <td>${shift.endDate}</td>
//         <td>${shift.days}</td>
//         <td>${shift.status}</td>
//         <td>${shift.comment}</td>
//         <td><button class="delete-button" data-id="${shift.id}">❌</button></td>
//       `;
//     });
//   })
//   .catch((error) => console.error(error));

// Logout button
logoutBtn.addEventListener("click", () => {
  window.location.replace("index.html");
});

// // Add new shift // DONE BY MIHAI
// addRowBtn.addEventListener("click", () => {
//   form.style.display = "block";
// });

// cancelBtn.addEventListener("click", () => {
//   form.style.display = "none";
// });

// submitBtn.addEventListener("click", () => {
//   const data = {
//     type: typeInput.value,
//     startDate: startDateInput.value,
//     endDate: endDateInput.value,
//   };

//   fetch("api/shifts", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((shift) => {
//       const row = table.insertRow();
//       row.innerHTML = `
//         <td><button class="edit-button" data-id="${shift.id}">🖊</button></td>
//         <td>${shift.type}</td>
//         <td>${shift.startDate}</td>
//         <td>${shift.endDate}</td>
//         <td>${shift.days}</td>
//         <td>${shift.status}</td>
//         <td>${shift.comment}</td>
//         <td><button class="delete-button" data-id="${shift.id}">❌</button></td>
//       `;

//       form.style.display = "none";
//     })
//     .catch((error) => console.error(error));
// });
