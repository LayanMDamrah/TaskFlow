const menuBtn = document.querySelector("#menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
}

const profileBtn = document.querySelector("#profileBtn");
const profileDropdown = document.querySelector("#profileDropdown");

if (profileBtn && profileDropdown) {
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    profileDropdown.classList.remove("show");
  });
}