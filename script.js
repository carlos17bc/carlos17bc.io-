const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  showSlide(currentIndex);
}, 3500); // Cambia cada 3.5 segundos