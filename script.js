const hamBurger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamBurger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
