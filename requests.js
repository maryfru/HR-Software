export function loadShiftsRequest() {
  return fetch("http://localhost:3000/shifts-json", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((r) => r.json());
}

export function createShiftRequest(shift) {
  return fetch("http://localhost:3000/shifts-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shift),
  }).then((r) => r.json());
}

export function updateShiftRequest(shift) {
  return fetch("http://localhost:3000/shifts-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shift),
  }).then((r) => r.json());
}

export function deleteShiftRequest(id) {
  return fetch("http://localhost:3000/shifts-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then((r) => r.json());
}
