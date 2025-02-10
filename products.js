
const sliderContainer = document.querySelector('.product-category');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const slideItems = document.querySelector('.product-img');
const itemsPerView = 3;
const totalSlides = Math.ceil(slideItems.length/itemsPerView);

let currentIndex = 0;

function updateSlider(type){
  let translateX = currentIndex * (100 / itemsPerView);
  if(type ==  "prev"){
    translateX = translateX
  }else{
    translateX = -translateX
  }
  sliderContainer.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener('click',()=>{
  currentIndex = currentIndex ===0 ? totalSlides - 1: currentIndex - 1;
  updateSlider("prev");
});

nextButton.addEventListener('click',()=>{
  currentIndex = currentIndex === totalSlides - 1 ? 0: currentIndex + 1;
  updateSlider("next");
});