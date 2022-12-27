let productsCountEl = document.getElementById("products-count");
let prevProductsCount = +productsCountEl.textContent;

//
let addToCartBtns = document.querySelectorAll(".add-btn");

addToCartBtns.forEach((element) =>
  element.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

/**
 * Modal Window
 */
let moreDetailsBtns = document.querySelectorAll(".more-details");

let modal = document.querySelector(".modal");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

let btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Show Modal window on scroll 50% of the page
let scrollBreakpoint = (document.body.scrollHeight - visualViewport.height) / 2;

// document.addEventListener("scroll", diagnostics);
document.addEventListener("scroll", modalOnScroll);

function modalOnScroll() {
  if (window.scrollY >= scrollBreakpoint) {
    openModal();
    document.removeEventListener("scroll", modalOnScroll);
  }
}

function diagnostics() {
  console.clear();
  console.log("window.scrollY: ", window.scrollY);
  console.log("document.body.scrollHeight: ", document.body.scrollHeight);
  console.log("visualViewport.height: ", visualViewport.height);
  console.log("scrollBreakpoint: ", scrollBreakpoint);
}

/**
 * Slider
 */
$(".slider-block").slick({
  dots: true,
  adaptiveHeight: true,
});

/**
 * Like and Dislike buttons actions
 */
let likeBtns = document.querySelectorAll(".add-favorite");

likeBtns.forEach((item) => item.addEventListener("click", likeActions));

function likeActions(event) {
  let item = event.target;
  if (item.classList.contains("add-favorite-liked") === true) {
    item.classList.add("add-favorite");
    item.classList.remove("add-favorite-liked");
  } else {
    item.classList.add("add-favorite-liked");
    item.classList.remove("add-favorite");
  }
}

///
///
///
///

let incrementBtns = document.querySelectorAll(".increment-btn");
let decrementBtns = document.querySelectorAll(".decrement-btn");
let inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

const counter1 = new Counter(incrementBtns[0], decrementBtns[0], inputFields[0]);

console.log(counter1);
