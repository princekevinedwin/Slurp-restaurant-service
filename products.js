const slider = document.getElementById('slider');
const productsToShow = 3; // Number of products visible at a time
const productCount = document.querySelectorAll('.product-img').length;
const totalSlides = Math.ceil(productCount / productsToShow);
let currentIndex = 0;

// Calculate the width of each slide
const productWidth = document.querySelector('.product-img').offsetWidth;
const gap = parseInt(getComputedStyle(document.querySelector('.product-img')).marginRight); // Assuming gap between products is defined by margin-right

// Set the total width of the slider to accommodate all products
slider.style.width = `${productCount * (productWidth + gap)}px`;

function updateSlider() {
  const offset = -(currentIndex * (productWidth + gap) * productsToShow); // Move slider by the width of 3 products (with gap)
  slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the beginning
  }
  updateSlider();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; // Loop to the last set of slides
  }
  updateSlider();
}

// Optional: Update the slider position on window resize to maintain correct display
window.addEventListener('resize', () => {
  const productWidthUpdated = document.querySelector('.product-img').offsetWidth;
  const gapUpdated = parseInt(getComputedStyle(document.querySelector('.product-img')).marginRight);
  slider.style.width = `${productCount * (productWidthUpdated + gapUpdated)}px`;
  updateSlider();
});