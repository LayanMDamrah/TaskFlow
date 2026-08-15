// ================================
// Sidebar
// ================================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
}


// ================================
// Profile Dropdown
// ================================

const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

if (profileBtn && profileDropdown) {

  profileBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    profileDropdown.classList.toggle("show");
    profileBtn.classList.toggle("open");
  });

  profileDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    profileDropdown.classList.remove("show");
    profileBtn.classList.remove("open");
  });
}