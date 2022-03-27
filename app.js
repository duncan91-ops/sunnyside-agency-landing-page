const links = document.querySelector(".header__links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  links.classList.toggle("active");
});
