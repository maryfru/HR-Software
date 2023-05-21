// get the buttons in the DOM //

var punchInBtn = document.querySelectorAll(".punch-in");
var lunchInBtn = document.querySelectorAll(".lunch-in");
var lunchOutBtn = document.querySelectorAll(".lunch-out");
var punchOutBtn = document.querySelectorAll(".punch-out");

// get the table cells in the DOM //
var pInTable = document.querySelector(".punchin");
var lInTable = document.querySelector(".lunchin");
var lOutTable = document.querySelector(".lunchout");
var pOutTable = document.querySelector(".punchout");

// get editing controls
var pencils = document.querySelectorAll(".fa-pencil");

// create a dataset to store the day's punches

let punches = [];
// variable to test if previous punch has been made
let punchInCheck = false;
let lunchInCheck = false;
let lunchOutCheck = false;

// functions
function updateTable(e) {
  e.preventDefault();
  const rowType = e.target.dataset.name;
  console.log(e.target.dataset.name);
  const punch = {
    punch: rowType,
    date: currentDate,
    time: currentTime,
  };
  const addRow = `
                    <div class="row header">
                      <div class="cell">
                        ${rowType}
                      </div>
                      <div class="cell">
                        Time
                      </div>
                    </div>
                    <div class="row">
                      <div class="cell">
                        <input type="text" value="${currentDate}" readonly>
                      </div>
                      <div class="cell">
                        <input type="text" value="${currentTime}" readonly>
                        <i class="fa fa-pencil"></i>
                        <i class="fa fa-trash-o"></i>
                      </div>
                    </div>
                    `;
  // switch(e.target)
  // x.innerHTML = addRow;
  function classCheck(check) {
    var test = e.target.getAttribute("class").includes(`${check}`);
    return test;
  }

  if (classCheck("punch-in")) {
    punchInCheck = true;
    e.target.innerHTML = "SUCCESS!";
    e.target.classList.remove("btn");
    e.target.classList.add("success");
    pInTable.innerHTML = addRow;
    punches.push(punch);
    console.table(punches);
    punchInBtn.forEach((btn) => {
      btn.removeEventListener("click", updateTable);
    });
  } else if (classCheck("lunch-in")) {
    if (punchInCheck) {
      lunchInCheck = true;
      e.target.innerHTML = "SUCCESS!";
      e.target.classList.remove("btn");
      e.target.classList.add("success");
      lInTable.innerHTML = addRow;
      punches.push(punch);
      console.table(punches);
      lunchInBtn.forEach((btn) => {
        btn.removeEventListener("click", updateTable);
      });
    } else {
      alert("Please punch in before taking lunch!");
    }
  } else if (classCheck("lunch-out")) {
    if (lunchInCheck) {
      lunchOutCheck = true;
      e.target.innerHTML = "SUCCESS!";
      e.target.classList.remove("btn");
      e.target.classList.add("success");
      lOutTable.innerHTML = addRow;
      punches.push(punch);
      console.table(punches);
      lunchOutBtn.forEach((btn) => {
        btn.removeEventListener("click", updateTable);
      });
    } else {
      alert("Please punch in lunch start before punching out!");
    }
  } else {
    if (lunchOutCheck) {
      e.target.innerHTML = "SUCCESS!";
      e.target.classList.remove("btn");
      e.target.classList.add("success");
      pOutTable.innerHTML = addRow;
      punches.push(punch);
      console.table(punches);
      punchOutBtn.forEach((btn) => {
        btn.removeEventListener("click", updateTable);
      });
    } else {
      alert("Please end lunch before punching out!");
    }
  }
}

function allowEdits() {
  console.log(e.target);
}

// add event listeners for buttons //

punchInBtn.forEach((btn) => {
  btn.addEventListener("click", updateTable);
});
lunchInBtn.forEach((btn) => {
  btn.addEventListener("click", updateTable);
});
lunchOutBtn.forEach((btn) => {
  btn.addEventListener("click", updateTable);
});
punchOutBtn.forEach((btn) => {
  btn.addEventListener("click", updateTable);
});

pencils.forEach((pencil) => {
  btn.addEventListener("click", allowEdits);
});

// lunchInBtn.addEventListener('click', updateTable);
// lunchOutBtn.addEventListener('click', updateTable);
// punchOutBtn.addEventListener('click', updateTable);

// get new Date();
var currentDate;
var currentTime;

function updateTime() {
  currentDate = new Date().toLocaleDateString();
  currentTime = new Date().toLocaleTimeString();
}
