const scrollingList = document.querySelector('.review-list');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount+=2;
  scrollingList.scrollTop = scrollAmount;
  

  if (scrollingList.scrollTop >= scrollingList.scrollHeight/2) {
    scrollingList.scrollTop = 0;
    scrollAmount = 0; 
  }
}

setInterval(autoScroll, 30); 