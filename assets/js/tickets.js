function toggleMenu(btn) {
  const menu = btn.nextElementSibling;
  const isOpen = menu.classList.contains("show");

  // close all open menus first
  document.querySelectorAll(".dropdown-menu.show").forEach((m) => {
    m.classList.remove("show");
  });

  if (!isOpen) {
    menu.classList.add("show");
  }
}

// close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("dots-btn")) {
    document.querySelectorAll(".dropdown-menu.show").forEach((m) => {
      m.classList.remove("show");
    });
  }
});