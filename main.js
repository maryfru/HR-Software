const logoutBtn = document.querySelector(".logout");

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

// Logout button
logoutBtn.addEventListener("click", () => {
  window.location.replace("index.html");
});
