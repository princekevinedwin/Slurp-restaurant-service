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

document.getElementById("sendButton").addEventListener("click", function(){
  const reviewList =
  document.getElementById("reviewList");
  const userReview =
  document.getElementById("userReview");
  const reviewText = userReview.value.trim();

  if(reviewText){
    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";
    reviewItem.textContent = reviewText;

    reviewList.appendChild(reviewItem);

    userReview.value = "";

    reviewList.scrollTop = reviewList.scrollHeight;
  }
  else{
    alert("Please write a review before sending");
  }
});