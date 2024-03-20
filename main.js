const productContainer = document.querySelector(".product-container");
const productCard = document.querySelectorAll(".product-card");
const buttonNext = document.querySelector("product-container-right-button");
let counter = 0;
const slideWidth = productCard[0].clientWidth * 2;

function moveSlider(direction) {
  if (counter === productCard.length) {
   
  }
  if (direction === "left") {
    counter--;
    if (counter < 0) {
      counter = productCard.length - 2;
    }
  } else if (direction === "right") {
    counter++;
    if (counter >= productCard.length - 1) {
      counter = 0;
    }
  }
  const offset = -slideWidth * counter;
  productContainer.style.transform = `translateX(${offset}px)`;
}
