const burgerMenuBtn = document.querySelector("#burger-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const mobileMenu = document.querySelector(".nav");

burgerMenuBtn.addEventListener("click", displayMobileMenu);
closeMenuBtn.addEventListener("click", closeMobileMenu);

// display and hide mobile menu
function displayMobileMenu(e) {
  burgerMenuBtn.classList.toggle("visible");
  closeMenuBtn.classList.toggle("visible");
  mobileMenu.classList.toggle("visible");
}

function closeMobileMenu(e) {
  burgerMenuBtn.classList.toggle("visible");
  closeMenuBtn.classList.toggle("visible");
  mobileMenu.classList.toggle("visible");
}
