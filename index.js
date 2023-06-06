const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownContent.classList.toggle("active");
});

dropdownContent.addEventListener("click", (e) => {
  if (!e.target.matches(".dropdown-item")) return;

  dropdownBtn.textContent = e.target.textContent;
});

window.addEventListener("click", (e) => {
  dropdownContent.classList.remove("active");
});
