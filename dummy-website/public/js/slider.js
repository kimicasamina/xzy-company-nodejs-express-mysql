const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
let randNum = 0;
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
document.addEventListener("DOMContentLoaded", animateSliderInfinitely);

function prevSlide() {
  slides[index].classList.remove("active", "slide-from-right");
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("active", "slide-from-right");
}

function nextSlide() {
  slides[index].classList.remove("active", "slide-from-left");
  index++;

  if (index > slides.length - 1) {
    index = 0;
  }

  slides[index].classList.add("active", "slide-from-left");
}

function animateSliderInfinitely() {
  nextSlide();
  setInterval(() => {
    nextSlide();
  }, 8000);
}
