const deleteBtn = document.querySelector("#deleteBtn");
const deleteModal = document.querySelector("#deleteModal");
const closeModal = document.querySelector("#closeModal");
const cancelDelete = document.querySelector("#cancelDelete");

deleteBtn.addEventListener("click", () => {
  deleteModal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  deleteModal.classList.remove("show");
});

cancelDelete.addEventListener("click", () => {
  deleteModal.classList.remove("show");
});

deleteModal.addEventListener("click", (event) => {
  if (event.target === deleteModal) {
    deleteModal.classList.remove("show");
  }
});