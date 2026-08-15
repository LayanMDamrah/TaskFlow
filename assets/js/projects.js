const projectSearch = document.getElementById("projectSearch");
const projectCards = document.querySelectorAll(".project-card");
const projectsCount = document.getElementById("projectsCount");

function filterProjects() {
  const searchValue = projectSearch.value
    .trim()
    .toLowerCase();

  let visibleProjects = 0;

  projectCards.forEach((card) => {
    const projectName =
      card.querySelector("h3")?.textContent.toLowerCase() || "";

    const description =
      card.querySelector(".card-desc")?.textContent.toLowerCase() || "";

    const tag =
      card.querySelector(".card-tag")?.textContent.toLowerCase() || "";

    const matches =
      projectName.includes(searchValue) ||
      description.includes(searchValue) ||
      tag.includes(searchValue);

    if (matches) {
      card.style.display = "";
      visibleProjects++;
    } else {
      card.style.display = "none";
    }
  });

  if (projectsCount) {
    projectsCount.textContent =
      `Your projects · ${visibleProjects}`;
  }
}

if (projectSearch) {
  projectSearch.addEventListener("input", filterProjects);
}