const productContainer = document.querySelector(".product-container");
const productCard = document.querySelectorAll(".product-card");
const buttonNext = document.querySelector(".product-container-right-button");

let counter = 0;
const slideWidth = productCard[0].clientWidth;

function moveSlider(direction) {
  if (direction === "next") {
    counter++;
    if (counter === productCard.length) {
      counter = 0;
    }
  } else if (direction === "prev") {
    counter--;
    if (counter < 0) {
      counter = productCard.length - 1;
    }
  }
  const offset = -slideWidth * counter;
  productContainer.style.transform = `translateX(${offset}px)`;
}

productCard.forEach((card) => {
  const colorButtons = card.querySelectorAll(".product-color button");

  colorButtons[0].classList.add("active");

  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      colorButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});