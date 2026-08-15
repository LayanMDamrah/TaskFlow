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

if (profileBtn) {
  profileBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    profileBtn.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    profileBtn.classList.remove("open");
  });
}